"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type LeadershipMember = {
  name: string;
  role: string;
  photo: string | null;
  bio: string[];
  linkedIn?: string;
};

type LeadershipSelectorProps = {
  members: LeadershipMember[];
};

export default function LeadershipSelector({ members }: LeadershipSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = members[selectedIndex];

  if (!selected) return null;

  const selectMember = (index: number, moveFocus = false) => {
    setSelectedIndex(index);
    if (moveFocus) {
      requestAnimationFrame(() => tabRefs.current[index]?.focus());
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectMember((index + 1) % members.length, true);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectMember((index - 1 + members.length) % members.length, true);
    }
  };

  return (
    <div className="leadership-selector">
      <div className="leadership-selector-panel content-card">
        <div role="tablist" aria-label="Leadership team" className="leadership-avatar-row">
          {members.map((member, index) => {
            const isSelected = index === selectedIndex;

            return (
              <button
                key={member.name}
                type="button"
                role="tab"
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                id={`leadership-tab-${index}`}
                aria-selected={isSelected}
                aria-controls="leadership-panel"
                aria-label={`${member.name}, ${member.role}`}
                className={`leadership-avatar-button ${isSelected ? "leadership-avatar-button-active" : ""}`}
                onClick={() => selectMember(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span className="leadership-avatar" aria-hidden="true">
                  {member.photo ? (
                    <Image src={member.photo} alt="" fill sizes="(min-width: 640px) 106px, 88px" className="object-cover object-top" />
                  ) : (
                    <span className="material-symbols-outlined">person</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="leadership-panel"
          aria-labelledby={`leadership-tab-${selectedIndex}`}
          className="leadership-detail"
        >
          <p className="leadership-name">{selected.name}</p>
          <h3 className="leadership-role">{selected.role}</h3>
          <div className="leadership-bio">
            {selected.bio.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="leadership-body">
                {paragraph}
              </p>
            ))}
          </div>
          {selected.linkedIn ? (
            <a
              href={selected.linkedIn}
              className="leadership-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
