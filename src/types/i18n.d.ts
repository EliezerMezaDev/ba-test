declare module "*.json" {
  const value: { [key: string]: any };
  export default value;
}

export interface TranslationData {
  static: {
    lang: string;
    nav: {
      buttonA: string;
      buttonB: string;
      buttonC: string;
      buttonD: string;
    };
    footer: {
      legal: string;
      author: string;
    };
    button: {
      text: string;
    };
    contact: {
      button: string;
      form: {
        namePlaceholder: string;
        lastNamePlaceholder: string;
        phonePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
      };
      error: {
        default: string;
        errorEmail: string;
        server: string;
        network: string;
      };
      success: string;
      sending: string;
    };
  };
  principal: {
    content: {
      info: {
        title: string;
        description: string;
      };
      ctaTitle: string;
    };
  };
  aboutUs: {
    content: {
      info: {
        title: string;
        description: string;
        subtitle: string;
      };
      attributesList: {
        label: string;
        desc: string;
      }[];
      attributesTitle: string;
      attributesDescription: string;
    };
  };
  services: {
    content: {
      info: {
        title: string;
        description: string;
      };
      specialties: {
        name: string;
        list: {
          specialty: string;
          title: string;
          items: string;
        }[];
      }[];
    };
  };
  additionals: {
    content: {
      info: {
        title: string;
        description: string;
      };
      list: {
        name: string;
        items: string;
      }[];
    };
  };
  contact: {
    content: {
      info: {
        title: string;
        description: string;
      };
      emailSubjet: string;
      link: {
        part1: string;
        part2: string;
      };
    };
  };
}

export interface LanguageContextProps {
  language: string;
  translations: TranslationData;
  changeLanguage: (newLang: string) => void;
}
