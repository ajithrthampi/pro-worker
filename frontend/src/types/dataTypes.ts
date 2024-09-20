// src/types/dataTypes.ts
export type DataItem = {
    created_at: string;
    updated_at: string;
    is_active: boolean;
    is_deleted: boolean;
    deleted_at: string | null;
    key_name: string;
    content_type: string;
    id: number;
    section_id: number;
    image_url: string | null;
    key_id: number;
    translation_content: string | null;
    multiple_translation_content: any;
    language_id: number;
    page_id: number;
  };
  
  export type SectionData = {
    section: string;
    data: Record<string, DataItem>;
  };
  
  export type LanguageDataSet = SectionData[];
  