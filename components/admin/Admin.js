"use client";

import React, { useState, useEffect } from 'react';
import { WebsiteContent } from '../../entities/WebsiteContent';
import { Button } from '../ui/button';
import { Plus, RotateCw } from 'lucide-react';
import { motion } from 'framer-motion';
import ContentEditor from './ContentEditor';
import ContentList from './ContentList';

/**
 * Admin component provides a dashboard for managing website content. It lists
 * existing content items, allows editing and deleting, and shows a content
 * editor form. This implementation uses the in-memory WebsiteContent entity
 * defined in entities/WebsiteContent.js.
 */
export default function Admin() {
  const [content, setContent] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    setIsLoading(true);
    try {
      const data = await WebsiteContent.list('section');
      setContent(data);
    } catch (error) {
      console.error('Error loading content:', error);
    }
    setIsLoading(false);
  };
  const handleSave = async (contentData) => {
    try {
      if (selectedContent?.id) {
        await WebsiteContent.update(selectedContent.id, contentData);
      } else {
        await WebsiteContent.create(contentData);
      }
      await loadContent();
      setSelectedContent(null);
      setShowEditor(false);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await WebsiteContent.delete(id);
      await loadContent();
      setSelectedContent(null);
      setShowEditor(false);
    } catch (error) {
      console.error('Error deleting content:', error);
    }
  };
  const handleEdit = (item) => {
    setSelectedContent(item);
    setShowEditor(true);
  };
  const handleCreateNew = () => {
    setSelectedContent(null);
    setShowEditor(true);
  };
  const handleToggleActive = async (id, isActive) => {
    try {
      await WebsiteContent.update(id, { is_active: isActive });
      await loadContent();
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Content Manager</h1>
            <p className="text-gray-600 mt-2">Customize your website content and messaging</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={loadContent} disabled={isLoading}>
              <RotateCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button onClick={handleCreateNew} className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Content
            </Button>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Website Content</h2>
              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : (
                <ContentList content={content} onEdit={handleEdit} onToggleActive={handleToggleActive} />
              )}
            </motion.div>
          </div>
          <div className="xl:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {showEditor ? 'Editor' : 'Quick Actions'}
              </h2>
              {showEditor ? (
                <ContentEditor
                  content={selectedContent}
                  onSave={handleSave}
                  onDelete={handleDelete}
                  onCreateNew={handleCreateNew}
                />
              ) : (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-600 mb-4">
                    Select content to edit or create new content for your website sections.
                  </p>
                  <Button onClick={handleCreateNew} className="w-full bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Content
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}