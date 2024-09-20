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

const data_set: SectionData[] = 
[
  {
    "section": "header",
    "data": {
      "logo": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "logo",
        "content_type": "Url",
        "id": 1,
        "section_id": 1,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": "/path/to/logo-en.png",
        "key_id": 1
      },
      "navigation_menu": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "navigation_menu",
        "content_type": "Json",
        "id": 3,
        "section_id": 1,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "Home": "Home",
          "About": "About",
          "Contacts": "Contacts",
          "Services": "Services",
          "Blogs": "Blogs"
        },
        "image_url": null,
        "key_id": 2
      },
      "language_switcher": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "language_switcher",
        "content_type": "Button",
        "id": 5,
        "section_id": 1,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "code": "ENG",
          "logo": "logo.url"
        },
        "image_url": null,
        "key_id": 3
      },
      "get_estimate_button": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "get_estimate_button",
        "content_type": "Button",
        "id": 7,
        "section_id": 1,
        "translation_content": "Get an estimate",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 4
      }
    }
  },
  {
    "section": "hero",
    "data": {
      "image": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "image",
        "content_type": "Url",
        "id": 9,
        "section_id": 2,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
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
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "title",
        "content_type": "Text",
        "id": 10,
        "section_id": 2,
        "translation_content": "Welcome To Plomberie 360 - Your Trusted Plumbing Partner.",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 5
      },
      "description": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "description",
        "content_type": "Text",
        "id": 11,
        "section_id": 2,
        "translation_content": "Welcome To Plomberie 360. At Plomberie 360, we redefine excellence in plumbing services. From leaky faucets to complex installations, our expert team is dedicated to delivering top-notch solutions tailored to your needs. Experience the difference with Plomberie 360 - where quality meets reliability.",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 6
      },
      "contact_us_button": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "contact_us_button",
        "content_type": "Button",
        "id": 12,
        "section_id": 2,
        "translation_content": "Contact Us",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 7
      }
    }
  },
  {
    "section": "about",
    "data": {
      "title": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "title",
        "content_type": "Text",
        "id": 17,
        "section_id": 3,
        "translation_content": "About Plomberie 360",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 5
      },
      "description": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "description",
        "content_type": "Text",
        "id": 19,
        "section_id": 3,
        "translation_content": "Founded by a seasoned plumber with more than a decade of experience, Plomberie 360 positions itself as a trusted reference in the plumbing industry in Quebec. Our commitment to excellence, coupled with a passion for quality service, sets us apart.",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 6
      },
      "about_us_button": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "about_us_button",
        "content_type": "Button",
        "id": 21,
        "section_id": 3,
        "translation_content": "About Us",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 10
      },
      "video": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "video",
        "content_type": "Url",
        "id": 23,
        "section_id": 3,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": "/path/to/about-section.mp4",
        "key_id": 9
      },
      "about_section_sub": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "about-section_sub",
        "content_type": "Json",
        "id": 25,
        "section_id": 3,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "REPAIR": {
            "content": "REPAIR",
            "logo_url": "about-logo.png"
          },
          "IMPROVE": {
            "content": "IMPROVE",
            "logo_url": "about-logo.png"
          },
          "MAINTAIN": {
            "content": "MAINTAIN",
            "logo_url": "about-logo.png"
          }
        },
        "image_url": null,
        "key_id": 29
      }
    }
  },
  {
    "section": "body_content",
    "data": {
      "web_cards": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "web_cards",
        "content_type": "Json",
        "id": 31,
        "section_id": 10,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "Card_1": {
            "body": "From routine maintenance to intricate installations, trust us to handle all your home plumbing needs.",
            "title": "Residential Plumbing",
            "Button": "Contact us",
            "image_url": "services/pic.png"
          },
          "Card_2": {
            "body": "Businesses rely on our expertise for efficient and reliable plumbing solutions tailored to their requirements.",
            "title": "Commercial Plumbing",
            "Button": "Contact us",
            "image_url": "services/pic.png"
          },
          "Card_3": {
            "body": "Plumbing emergencies require rapid action. Plomberie 360 is your partner for repairs 24/7.",
            "title": "Emergency repairs",
            "Button": "Contact us",
            "image_url": "services/pic.png"
          }
        },
        "image_url": null,
        "key_id": 28
      }
    }
  },
  {
    "section": "why_choose_us",
    "data": {
      "title": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "title",
        "content_type": "Text",
        "id": 33,
        "section_id": 5,
        "translation_content": "Why choose Plumbing 360?",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 5
      },
      "web_cards": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "web_cards",
        "content_type": "Json",
        "id": 34,
        "section_id": 5,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "services": [
            {
              "title": "Qualified professionals",
              "logo_url": "url-to-qualified-professionals-logo",
              "description": "With over a decade of experience, our qualified plumbers bring expertise and precision to every project."
            },
            {
              "title": "Advanced technology",
              "logo_url": "url-to-advanced-technology-logo",
              "description": "We leverage the latest technology to efficiently diagnose and resolve plumbing problems, ensuring long-lasting results."
            },
            {
              "title": "24/7 emergency services",
              "logo_url": "url-to-247-emergency-services-logo",
              "description": "Plumbing issues do not respect business hours. Our dedicated team is on standby, ready to resolve emergencies at any time, day or night."
            }
          ]
        },
        "image_url": null,
        "key_id": 28
      }
    }
  },
  {
    "section": "services_24/7",
    "data": {
      "services_sub": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "services_24/7_sub",
        "content_type": "Json",
        "id": 45,
        "section_id": 11,
        "translation_content": " We provide professional home services 24/7",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "email": {
            "email": "info@plomberie360.com",
            "content": "Email Address",
            "logo_url": "logo.url"
          },
          "phone": {
            "phone": "(514) 601 9664",
            "content": "Cell Number",
            "logo_url": "about-logo.png"
          }
        },
        "image_url": null,
        "key_id": 30
      }
    }
  },
  {
    "section": "focus_banner",
    "data": {
      "focus_banner_sub": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "focus_banner_sub",
        "content_type": "Json",
        "id": 47,
        "section_id": 12,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "content": "We focus on customer satisfaction and quality",
          "image_url": "image.png"
        },
        "image_url": null,
        "key_id": 31
      }
    }
  },
  {
    "section": "certifications",
    "data": {
      "title": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "title",
        "content_type": "Text",
        "id": 49,
        "section_id": 7,
        "translation_content": "Certifications",
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": null,
        "key_id": 5
      },
      "certification_logos": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "certification_logos",
        "content_type": "Image",
        "id": 50,
        "section_id": 7,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "certificate_1": "certificate.png",
          "certificate_2": "certificate.png",
          "certificate_3": "certificate.png"
        },
        "image_url": null,
        "key_id": 22
      }
    }
  },
  {
    "section": "contact_us_estimate_banner",
    "data": {
      "contact_us_estimate_sub": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "contact_us_estimate_sub",
        "content_type": "Json",
        "id": 53,
        "section_id": 13,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "phone": "+91 1234567890 ",
          "content": "Contact us for an estimate",
          "image_url": "image.png"
        },
        "image_url": null,
        "key_id": 32
      }
    }
  },
  {
    "section": "footer_information",
    "data": {
      "footer_section_sub": {
        "created_at": "2024-07-30T18:08:16.450598",
        "updated_at": "2024-07-30T18:08:16.450598",
        "is_active": true,
        "is_deleted": false,
        "deleted_at": null,
        "key_name": "footer_section_sub",
        "content_type": "Json",
        "id": 55,
        "section_id": 9,
        "translation_content": null,
        "language_id": 1,
        "page_id": 1,
        "multiple_translation_content": {
          "content": {
            "line_1": "More Than Just Pipes",
            "line_2": "We will serve you better",
            "line_3": "Plomberie 360, we redefine excellence in plumbing services.",
            "line_4": "© 2024 All Rights Reserved plumbing360",
            "logo_url": "logo.png",
            "footer_menu": {
              "about": "About",
              "contact": "Contact",
              "services": "Services"
            },
            "social_media_urls": {
              "youtube": "https://youtube.com",
              "facebook": "https://facebook.com",
              "linkedin": "https://linkedin.com",
              "instagram": "https://instagram.com"
            }
          }
        },
        "image_url": null,
        "key_id": 33
      }
    }
  }
]

export default data_set;
