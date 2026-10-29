"use client";

import { useEffect, useId, useState } from "react";
import { adminApi, uploadPhoto } from "@/lib/admin-api";
import { photoThumbnailSrc, type PortfolioContent } from "@/lib/site-content";
import { DEFAULT_PORTFOLIO } from "@/lib/site-content-defaults";
import { AdminButton, SaveBar, StatusMessage, inputClass, labelClass } from "@/components/admin/admin-ui";

type Group = { key: string; client: string; photos: string[] };

function PhotoEditor({
  photos,
  label,
  onChange,
}: {
  photos: string[];
  label: string;
  onChange: (photos: string[]) => void;
}) {
  const inputId = useId();
  const [progress, setProgress] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const move = (index: number, by: number) => {
    const next = [...photos];
    const [photo] = next.splice(index, 1);
    next.splice(index + by, 0, photo);
    onChange(next);
  };

  const upload = async (files: FileList | null) => {
    if (!files?.length) return;
    const added: string[] = [];
    const failed: string[] = [];
    for (const [index, file] of Array.from(files).entries()) {
      setProgress(`Uploading ${index + 1} of ${files.length}…`);
      const result = await uploadPhoto(file);
      if (result.ok) added.push(result.src);
      else failed.push(result.error);
    }
    setProgress(null);
    setErrors(failed);
    if (added.length) onChange([...photos, ...added]);
  };

  return (
    <div className="space-y-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.map((src, index) => (
          <li key={src} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoThumbnailSrc(src)}
              alt={`${label} photo ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover bg-slate-100"
            />
            <div className="flex items-center justify-between gap-1 p-1.5">
              <div className="flex gap-1">
                <AdminButton
                  className="!px-2 !py-1"
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  aria-label={`Move ${label} photo ${index + 1} earlier`}
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_back</span>
                </AdminButton>
                <AdminButton
                  className="!px-2 !py-1"
                  onClick={() => move(index, 1)}
                  disabled={index === photos.length - 1}
                  aria-label={`Move ${label} photo ${index + 1} later`}
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                </AdminButton>
              </div>
              <AdminButton
                variant="danger"
                className="!px-2 !py-1"
                onClick={() => onChange(photos.filter((photo) => photo !== src))}
                aria-label={`Remove ${label} photo ${index + 1}`}
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">delete</span>
              </AdminButton>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-3">
        <label
          htmlFor={inputId}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-primary hover:text-primary focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--color-primary)]"
        >
          <span className="material-symbols-outlined text-lg" aria-hidden="true">add_photo_alternate</span>
          Add photos
          <input
            id={inputId}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            multiple
            className="sr-only"
            disabled={progress !== null}
            onChange={(event) => {
              void upload(event.target.files);
              event.target.value = "";
            }}
          />
        </label>
        {progress && <p className="text-sm text-slate-600" role="status">{progress}</p>}
      </div>
      {errors.length > 0 && <StatusMessage tone="error">{errors.join(" ")}</StatusMessage>}
    </div>
  );
}

const toGroups = (portfolio: PortfolioContent): Group[] =>
  portfolio.groups.map((group) => ({ key: crypto.randomUUID(), ...group }));

type Props = { onDirtyChange: (dirty: boolean) => void; onSessionExpired: () => void };

export default function AdminPortfolioEditor({ onDirtyChange, onSessionExpired }: Props) {
  const [latestWork, setLatestWork] = useState<string[] | null>(null);
  const [groups, setGroups] = useState<Group[]>([]);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [newClient, setNewClient] = useState("");
  const [latestOpen, setLatestOpen] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ tone: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    adminApi.published().then((content) => {
      const portfolio = content?.portfolio ?? DEFAULT_PORTFOLIO;
      setLatestWork(portfolio.latestWork);
      setGroups(toGroups(portfolio));
    });
  }, []);

  useEffect(() => onDirtyChange(dirty), [dirty, onDirtyChange]);

  const changed = () => {
    setDirty(true);
    setMessage(null);
  };

  const editGroup = (key: string, changes: Partial<Group>) => {
    setGroups((current) => current.map((group) => (group.key === key ? { ...group, ...changes } : group)));
    changed();
  };

  const moveGroup = (index: number, by: number) => {
    setGroups((current) => {
      const next = [...current];
      const [group] = next.splice(index, 1);
      next.splice(index + by, 0, group);
      return next;
    });
    changed();
  };

  const addClient = () => {
    const client = newClient.trim();
    if (!client) return;
    const key = crypto.randomUUID();
    setGroups((current) => [...current, { key, client, photos: [] }]);
    setOpenKey(key);
    setNewClient("");
    changed();
  };

  const save = async () => {
    if (!latestWork) return;
    setSaving(true);
    const result = await adminApi.savePortfolio({
      latestWork,
      groups: groups.map(({ client, photos }) => ({ client, photos })),
    });
    setSaving(false);
    if (result.success) {
      setDirty(false);
      setMessage({ tone: "success", text: "Published. The Our Work page now shows these photos." });
    } else if (result.status === 401) {
      onSessionExpired();
    } else {
      setMessage({ tone: "error", text: result.error });
    }
  };

  if (!latestWork) return <p className="text-slate-600">Loading portfolio…</p>;

  return (
    <div className="space-y-6">
      <p className="text-slate-600 max-w-2xl">
        Photos shown on the <a className="text-primary underline" href="/our-work" target="_blank" rel="noopener">Our Work page</a>.
        Open a section to add, remove or reorder photos. Clients without photos are not shown on the website.
      </p>

      <section className="rounded-2xl border border-slate-200 bg-white">
        <button
          type="button"
          aria-expanded={latestOpen}
          onClick={() => setLatestOpen((open) => !open)}
          className="flex w-full items-center justify-between gap-3 p-5 text-left"
        >
          <span>
            <span className="block font-bold text-slate-900">Latest Work</span>
            <span className="text-sm text-slate-500">{latestWork.length} photos · shown first on Our Work</span>
          </span>
          <span className="material-symbols-outlined" aria-hidden="true">{latestOpen ? "expand_less" : "expand_more"}</span>
        </button>
        {latestOpen && (
          <div className="border-t border-slate-200 p-5">
            <PhotoEditor
              photos={latestWork}
              label="Latest Work"
              onChange={(photos) => {
                setLatestWork(photos);
                changed();
              }}
            />
          </div>
        )}
      </section>

      <h2 className="text-lg font-bold text-slate-900 pt-2">Clients</h2>

      <ul className="space-y-3">
        {groups.map((group, index) => {
          const isOpen = openKey === group.key;
          const nameId = `client-${group.key}`;
          return (
            <li key={group.key} className="rounded-2xl border border-slate-200 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenKey(isOpen ? null : group.key)}
                  className="flex min-w-0 flex-1 items-center gap-3 text-left"
                >
                  <span className="material-symbols-outlined shrink-0" aria-hidden="true">
                    {isOpen ? "expand_less" : "expand_more"}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-slate-900 [overflow-wrap:anywhere]">{group.client || "Unnamed client"}</span>
                    <span className="text-sm text-slate-500">
                      {group.photos.length} photo{group.photos.length === 1 ? "" : "s"}
                      {group.photos.length === 0 && " · not shown"}
                    </span>
                  </span>
                </button>
                <div className="flex gap-2">
                  <AdminButton onClick={() => moveGroup(index, -1)} disabled={index === 0} aria-label={`Move ${group.client} up`}>
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_upward</span>
                  </AdminButton>
                  <AdminButton
                    onClick={() => moveGroup(index, 1)}
                    disabled={index === groups.length - 1}
                    aria-label={`Move ${group.client} down`}
                  >
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">arrow_downward</span>
                  </AdminButton>
                </div>
              </div>

              {isOpen && (
                <div className="space-y-5 border-t border-slate-200 p-4 sm:p-5">
                  <div className="flex flex-wrap items-end gap-3">
                    <div className="min-w-0 flex-1 basis-64">
                      <label htmlFor={nameId} className={labelClass}>Client name</label>
                      <input
                        id={nameId}
                        className={inputClass}
                        value={group.client}
                        onChange={(event) => editGroup(group.key, { client: event.target.value })}
                      />
                    </div>
                    <AdminButton
                      variant="danger"
                      onClick={() => {
                        if (window.confirm(`Remove ${group.client || "this client"} and all of its photos?`)) {
                          setGroups((current) => current.filter((item) => item.key !== group.key));
                          changed();
                        }
                      }}
                    >
                      Remove client
                    </AdminButton>
                  </div>
                  <PhotoEditor
                    photos={group.photos}
                    label={group.client}
                    onChange={(photos) => editGroup(group.key, { photos })}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <form
        className="flex flex-wrap items-end gap-3 rounded-2xl border border-dashed border-slate-300 p-4 sm:p-5"
        onSubmit={(event) => {
          event.preventDefault();
          addClient();
        }}
      >
        <div className="min-w-0 flex-1 basis-64">
          <label htmlFor="new-client" className={labelClass}>Add a client</label>
          <input
            id="new-client"
            className={inputClass}
            value={newClient}
            onChange={(event) => setNewClient(event.target.value)}
            placeholder="Client or brand name"
          />
        </div>
        <AdminButton type="submit" disabled={!newClient.trim()}>
          <span className="material-symbols-outlined text-lg" aria-hidden="true">add</span>
          Add client
        </AdminButton>
      </form>

      <SaveBar dirty={dirty} saving={saving} onSave={save} message={message} />
    </div>
  );
}
