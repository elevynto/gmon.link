'use client';
import React from 'react';
import { Button } from './button';
import { Checkbox } from './checkbox';

interface SearchBarProps {
  onSubmit: ({ value, tags }: { value: string; tags?: string[] }) => void;
  tags?: string[];
}

export const SearchBar = ({ onSubmit, tags }: SearchBarProps) => {
  const [value, setValue] = React.useState('');

  const onSubmitSearchBar = () => {
    onSubmit({ value, ...(tags && { tags }) });
  };

  return (
    <div className="flex flex-col align-center gap-3">
      <div className="flex justify-center gap-1">
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmitSearchBar();
            }
          }}
          type="text"
          placeholder="Search for projects..."
          className="border shadow border-muted-foreground/30 px-2 py-1 rounded-md bg-card transition-colors hover:bg-muted hover:border-muted-foreground/90"
        />
        <Button onClick={onSubmitSearchBar} variant="default" size="default">
          Search
        </Button>
      </div>
      {tags?.length && (
        <div className="flex justify-center ">
          <div className="flex flex-wrap justify-center gap-4 max-w-80">
            {tags.map((tag) => (
              <Checkbox key={`project-tag-${tag}`} label={tag} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
