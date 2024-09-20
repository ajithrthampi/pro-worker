type DataItem = {
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

type SectionData = {
  section: string;
  data: Record<string, DataItem>;
};


const french_about_set:SectionData[] = 
[
  {
    "section": "hero",
    "data": {
      "image": {
        "created_at": "2024-07-30T21:46:41.020613",
        "updated_at": "2024-07-30T21:46:41.020613",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "image",
        "content_type": "Url",
        "id": 59,
        "section_id": 2,
        "translation_content": null,
        "language_id": 2,
        "page_id": 2,
        "multiple_translation_content": {
          "Hero_section_images_large_scale": {
            "image_1": "hero/image.png",
            "image_2": "hero/image.png",
            "image_3": "hero/image.png"
          },
          "Hero_section_images_small_scale": {
            "image_1": "hero/image.png",
            "image_2": "hero/image.png",
            "image_3": "hero/image.png"
          }
        },
        "image_url": null,
        "key_id": 8
      },
      "title": {
        "created_at": "2024-07-30T22:26:57.423224",
        "updated_at": "2024-07-30T22:26:57.423224",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "title",
        "content_type": "Text",
        "id": 63,
        "section_id": 2,
        "translation_content": "À propos de notre entreprise Plomberie 360 - Plus que de simples tuyaux",
        "language_id": 2,
        "page_id": 2,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 5
      },
      "description": {
        "created_at": "2024-07-30T22:26:57.423224",
        "updated_at": "2024-07-30T22:26:57.423224",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "description",
        "content_type": "Text",
        "id": 64,
        "section_id": 2,
        "translation_content": "Fondée par un plombier chevronné avec plus d'une décennie d'expérience, Plomberie 360 se positionne comme une référence de confiance dans l'industrie de la plomberie au Québec. Notre engagement envers l'excellence, associé à une passion pour un service de qualité, nous distingue en tant que votre solution de plomberie privilégiée.",
        "language_id": 2,
        "page_id": 2,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 6
      },
      "contact_us_button": {
        "created_at": "2024-07-30T22:26:57.423224",
        "updated_at": "2024-07-30T22:26:57.423224",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "contact_us_button",
        "content_type": "Button",
        "id": 65,
        "section_id": 2,
        "translation_content": "Contactez-nous",
        "language_id": 2,
        "page_id": 2,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 7
      }
    }
  },
  {
    "section": "body_content",
    "data": {
      "title": {
        "created_at": "2024-07-31T09:42:14.767615",
        "updated_at": "2024-07-31T09:42:14.767615",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "title",
        "content_type": "Text",
        "id": 68,
        "section_id": 10,
        "translation_content": "Des valeurs qui nous font avancer",
        "language_id": 2,
        "page_id": 2,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 5
      }
    }
  },
  {
    "section": "why_choose_us",
    "data": {
      "web_cards": {
        "created_at": "2024-07-31T09:42:14.767615",
        "updated_at": "2024-07-31T09:42:14.767615",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "web_cards",
        "content_type": "Json",
        "id": 69,
        "section_id": 5,
        "translation_content": null,
        "language_id": 2,
        "page_id": 2,
        "multiple_translation_content": {
          "values": [
            {
              "title": "Fiabilité",
              "logo_url": "url-to-qualified-professionals-logo",
              "description": "Toujours là quand tu as besoin de nous."
            },
            {
              "title": "Excellence",
              "logo_url": "url-to-advanced-technology-logo",
              "description": "Norme de service la plus élevée, à chaque fois."
            },
            {
              "title": "Contentement",
              "logo_url": "url-to-247-emergency-services-logo",
              "description": "Votre bonheur et la satisfaction est notre priorité."
            },
            {
              "title": "Professionnalisme",
              "logo_url": "url-to-247-emergency-services-logo",
              "description": "Respectueux, compétent, courtois."
            }
          ]
        },
        "image_url": null,
        "key_id": 28
      }
    }
  }
  ]

  export default french_about_set