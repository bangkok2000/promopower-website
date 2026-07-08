"use client";

import Image from "next/image";
import { useState } from "react";

export type LeadershipMember = {
  name: string;
  role: string;
  photo: string | null;
  responsibility: string;
};

type LeadershipSelectorProps = {
  members: LeadershipMember[];
};

export default function LeadershipSelector({ members }: LeadershipSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = members[selectedIndex];

  if (!selected) return null;

  const selectMember = (index: number) => {
    setSelectedIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectMember((index + 1) % members.length);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectMember((index - 1 + members.length) % members.length);
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
                key={member.role}
                type="button"
                role="tab"
                id={`leadership-tab-${index}`}
                aria-selected={isSelected}
                aria-controls={`leadership-panel-${index}`}
                aria-label={`${member.name}, ${member.role}`}
                className={`leadership-avatar-button ${isSelected ? "leadership-avatar-button-active" : ""}`}
                onClick={() => selectMember(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span className="leadership-avatar" aria-hidden="true">
                  {member.photo ? (
                    <Image src={member.photo} alt="" fill sizes="(min-width: 640px) 96px, 80px" className="object-cover object-top" />
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
          id={`leadership-panel-${selectedIndex}`}
          aria-labelledby={`leadership-tab-${selectedIndex}`}
          className="leadership-detail"
        >
          <p className="leadership-name">{selected.name}</p>
          <h3 className="leadership-role">{selected.role}</h3>
          <p className="leadership-body">{selected.responsibility}</p>
        </div>
      </div>
    </div>
  );
}
