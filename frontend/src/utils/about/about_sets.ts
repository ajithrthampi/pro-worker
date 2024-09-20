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

  const about_sets:SectionData[] = [
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
            "id": 58,
            "section_id": 2,
            "translation_content": null,
            "language_id": 1,
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
            "created_at": "2024-07-30T22:00:44.851549",
            "updated_at": "2024-07-30T22:00:44.851549",
            "is_active": true,
            "is_deleted": false,
            "deleted_at": null,
            "key_name": "title",
            "content_type": "Text",
            "id": 60,
            "section_id": 2,
            "translation_content": "About Our CompanyPlomberie 360 - More Than Just Pipes",
            "language_id": 1,
            "page_id": 2,
            "multiple_translation_content": null,
            "image_url": null,
            "key_id": 5
          },
          "description": {
            "created_at": "2024-07-30T22:00:44.851549",
            "updated_at": "2024-07-30T22:00:44.851549",
            "is_active": true,
            "is_deleted": false,
            "deleted_at": null,
            "key_name": "description",
            "content_type": "Text",
            "id": 61,
            "section_id": 2,
            "translation_content": "Founded by a seasoned plumber with over a decade of experience, Plomberie 360 stands as a beacon of trust in the Quebec plumbing industry. Our commitment to excellence, paired with a passion for quality service, sets us apart as your go-to plumbing solution.",
            "language_id": 1,
            "page_id": 2,
            "multiple_translation_content": null,
            "image_url": null,
            "key_id": 6
          },
          "contact_us_button": {
            "created_at": "2024-07-30T22:00:44.851549",
            "updated_at": "2024-07-30T22:00:44.851549",
            "is_active": true,
            "is_deleted": false,
            "deleted_at": null,
            "key_name": "contact_us_button",
            "content_type": "Button",
            "id": 62,
            "section_id": 2,
            "translation_content": "Contact Us",
            "language_id": 1,
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
            "id": 66,
            "section_id": 10,
            "translation_content": "Values that drives us forward",
            "language_id": 1,
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
            "id": 67,
            "section_id": 5,
            "translation_content": null,
            "language_id": 1,
            "page_id": 2,
            "multiple_translation_content": {
              "values": [
                {
                  "title": "Reliability",
                  "logo_url": "url-to-qualified-professionals-logo",
                  "description": "Always there when need us."
                },
                {
                  "title": "Excellence",
                  "logo_url": "url-to-advanced-technology-logo",
                  "description": "Highest standard of service, every time."
                },
                {
                  "title": "Contentment",
                  "logo_url": "url-to-247-emergency-services-logo",
                  "description": "Your happiness and satisfaction is our priority."
                },
                {
                  "title": "Professionalism",
                  "logo_url": "url-to-247-emergency-services-logo",
                  "description": "Respectful, skilled, courteous."
                }
              ]
            },
            "image_url": null,
            "key_id": 28
          }
        }
      }
  ]

  export default about_sets