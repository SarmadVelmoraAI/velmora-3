"use client";

import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';

/**
 * ContentList displays existing website content entries in a simple list. Each
 * entry shows the section and title along with an edit button and an active
 * toggle switch. Clicking edit triggers the `onEdit` callback with the item.
 * Toggling the switch calls `onToggleActive` with the item's id and new state.
 */
export default function ContentList({ content, onEdit, onToggleActive }) {
  if (!content || content.length === 0) {
    return <p className="text-gray-500">No content found.</p>;
  }
  return (
    <div className="space-y-4">
      {content.map((item) => (
        <Card key={item.id} className="border p-4 flex items-center justify-between">
          <CardContent className="p-0 flex-1">
            <div className="mb-1 font-medium">{item.section.toUpperCase()}</div>
            <div className="text-gray-700">{item.title}</div>
          </CardContent>
          <div className="flex items-center gap-4">
            <Switch
              id={`toggle-${item.id}`}
              checked={item.is_active}
              onCheckedChange={(checked) => onToggleActive(item.id, checked)}
            />
            <Button onClick={() => onEdit(item)}>Edit</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}