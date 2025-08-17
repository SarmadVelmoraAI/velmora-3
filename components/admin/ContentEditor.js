"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Save, Plus, Trash2 } from 'lucide-react';

// List of available sections for content creation/editing.
const sections = [
  { value: 'hero', label: 'Hero Section' },
  { value: 'services', label: 'Services Section' },
  { value: 'features', label: 'Features Section' },
  { value: 'contact', label: 'Contact Section' },
  { value: 'footer', label: 'Footer Section' },
];

/**
 * ContentEditor renders a form for editing or creating website content objects.
 * It accepts callbacks for save and delete operations and the initial content
 * object. The form fields mirror the properties of WebsiteContent.
 */
export default function ContentEditor({ content, onSave, onDelete, onCreateNew }) {
  const [formData, setFormData] = useState(
    content || {
      section: '',
      title: '',
      subtitle: '',
      content: '',
      button_text: '',
      button_url: '',
      image_url: '',
      order_priority: 0,
      is_active: true,
    },
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const isEditing = !!content?.id;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="shadow-lg">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center justify-between">
            <span>{isEditing ? 'Edit Content' : 'Create New Content'}</span>
            <div className="flex gap-2">
              {isEditing && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(content.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              )}
              <Button variant="outline" size="sm" onClick={onCreateNew}>
                <Plus className="w-4 h-4 mr-2" />
                New
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Section</Label>
                <Select value={formData.section} onValueChange={(value) => handleInputChange('section', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map((section) => (
                      <SelectItem key={section.value} value={section.value}>
                        {section.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Order Priority</Label>
                <Input
                  type="number"
                  value={formData.order_priority}
                  onChange={(e) => handleInputChange('order_priority', parseInt(e.target.value) || 0)}
                  placeholder="0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter title"
              />
            </div>
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input
                value={formData.subtitle}
                onChange={(e) => handleInputChange('subtitle', e.target.value)}
                placeholder="Enter subtitle"
              />
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <Textarea
                rows={6}
                value={formData.content}
                onChange={(e) => handleInputChange('content', e.target.value)}
                placeholder="Enter main content"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Button Text</Label>
                <Input
                  value={formData.button_text}
                  onChange={(e) => handleInputChange('button_text', e.target.value)}
                  placeholder="Enter button text"
                />
              </div>
              <div className="space-y-2">
                <Label>Button URL</Label>
                <Input
                  value={formData.button_url}
                  onChange={(e) => handleInputChange('button_url', e.target.value)}
                  placeholder="Enter button URL"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input
                value={formData.image_url}
                onChange={(e) => handleInputChange('image_url', e.target.value)}
                placeholder="Enter image URL"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => handleInputChange('is_active', checked)}
              />
              <Label htmlFor="is_active">Active</Label>
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              <Save className="w-4 h-4 mr-2" />
              {isEditing ? 'Update Content' : 'Create Content'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}