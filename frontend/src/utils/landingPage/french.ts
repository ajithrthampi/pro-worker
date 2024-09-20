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

const french_data_set: SectionData[] = 
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
        "id": 2,
        "section_id": 1,
        "translation_content": null,
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": null,
        "image_url": "/path/to/logo-fr.png",
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
        "id": 4,
        "section_id": 1,
        "translation_content": null,
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": {
          "Home": "Accueil",
          "About": "À propos",
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
        "id": 6,
        "section_id": 1,
        "translation_content": null,
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": {
          "code": "FRN",
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
        "id": 8,
        "section_id": 1,
        "translation_content": "Obtenez une estimation",
        "language_id": 2,
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
        "id": 13,
        "section_id": 2,
        "translation_content": null,
        "language_id": 2,
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
        "id": 14,
        "section_id": 2,
        "translation_content": "Bienvenue à Plomberie 360 - Votre partenaire de confiance en plomberie.",
        "language_id": 2,
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
        "id": 15,
        "section_id": 2,
        "translation_content": "Bienvenue chez Plomberie 360. Chez Plomberie 360, nous redéfinissons l'excellence en matière de services de plomberie. Des robinets qui fuient aux installations complexes, notre équipe d'experts est dédiée à vous offrir des solutions de haute qualité, adaptées à vos besoins. Découvrez la différence avec Plomberie 360 - là où qualité rime avec fiabilité.",
        "language_id": 2,
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
        "id": 16,
        "section_id": 2,
        "translation_content": "Contactez-nous",
        "language_id": 2,
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
        "id": 18,
        "section_id": 3,
        "translation_content": "À propos de Plomberie 360",
        "language_id": 2,
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
        "id": 20,
        "section_id": 3,
        "translation_content": "Fondée par un plombier chevronné avec plus de dix ans d'expérience, Plomberie 360 se positionne comme une référence de confiance dans l'industrie de la plomberie au Québec. Notre engagement envers l'excellence, associé à une passion pour un service de qualité, nous distingue.",
        "language_id": 2,
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
        "id": 22,
        "section_id": 3,
        "translation_content": "À propos de nous",
        "language_id": 2,
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
        "id": 24,
        "section_id": 3,
        "translation_content": null,
        "language_id": 2,
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
        "id": 26,
        "section_id": 3,
        "translation_content": null,
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": {
          "REPAIR": {
            "content": "RÉPARATION",
            "logo_url": "about-logo.png"
          },
          "IMPROVE": {
            "content": "AMÉLIORER",
            "logo_url": "about-logo.png"
          },
          "MAINTAIN": {
            "content": "MAINTENIR",
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
        "id": 32,
        "section_id": 10,
        "translation_content": null,
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": {
          "Card_1": {
            "body": "De l'entretien de routine aux installations complexes, faites confiance à notre expertise pour tous vos besoins en plomberie à domicile.",
            "title": "Plomberie résidentielle",
            "Button": "Contactez-nous",
            "image_url": "services/pic.png"
          },
          "Card_2": {
            "body": "Les entreprises comptent sur notre expertise pour des solutions de plomberie efficaces et fiables adaptées à leurs besoins.",
            "title": "Plomberie commerciale",
            "Button": "Contactez-nous",
            "image_url": "services/pic.png"
          },
          "Card_3": {
            "body": "Les urgences de plomberie nécessitent une action rapide. Plomberie 360 est votre partenaire pour des réparations 24/7.",
            "title": "Réparations d'urgence",
            "Button": "Contactez-nous",
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
        "id": 35,
        "section_id": 5,
        "translation_content": "Pourquoi choisir Plomberie 360 ?",
        "language_id": 2,
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
        "id": 36,
        "section_id": 5,
        "translation_content": null,
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": {
          "services": [
            {
              "title": "Professionnels qualifiés",
              "logo_url": "url-to-qualified-professionals-logo",
              "description": "Avec plus d'une décennie d'expérience, nos plombiers qualifiés apportent expertise et précision à chaque projet."
            },
            {
              "title": "Technologie avancée",
              "logo_url": "url-to-advanced-technology-logo",
              "description": "Nous utilisons les dernières technologies pour diagnostiquer et résoudre efficacement les problèmes de plomberie, garantissant des résultats durables."
            },
            {
              "title": "Services d'urgence 24/7",
              "logo_url": "url-to-247-emergency-services-logo",
              "description": "Les problèmes de plomberie ne respectent pas les heures de bureau. Notre équipe dédiée est prête à intervenir en cas d'urgence à tout moment, de jour comme de nuit."
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
        "id": 46,
        "section_id": 11,
        "translation_content": "Nous fournissons des services professionnels à domicile 24h/24 et 7j/7",
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": {
          "email": {
            "email": "info@plomberie360.com",
            "content": "Courriel",
            "logo_url": "logo.url"
          },
          "phone": {
            "phone": "(514) 601 9664",
            "content": "Cellulaire",
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
        "id": 48,
        "section_id": 12,
        "translation_content": null,
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": {
          "content": "Nous nous concentrons sur la satisfaction du client et la qualité",
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
        "id": 51,
        "section_id": 7,
        "translation_content": "Attestations",
        "language_id": 2,
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
        "id": 52,
        "section_id": 7,
        "translation_content": null,
        "language_id": 2,
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
        "id": 54,
        "section_id": 13,
        "translation_content": null,
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": {
          "phone": "+91 1234567890 ",
          "content": "Contactez nous pour un devis",
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
        "id": 56,
        "section_id": 9,
        "translation_content": null,
        "language_id": 2,
        "page_id": 1,
        "multiple_translation_content": {
          "content": {
            "line_1": "Plus que de simples tuyaux",
            "line_2": "Nous vous servirons mieux",
            "line_3": "Plomberie 360, nous redéfinissons l'excellence des services de plomberie.",
            "line_4": "© 2024 Tous Droits Réservés plomberie360",
            "logo_url": "logo.png",
            "footer_menu": {
              "about": "À propos",
              "contact": "Nous contacter",
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

export default french_data_set;
