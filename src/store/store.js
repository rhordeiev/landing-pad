import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      reports: [
        {
          id: 1,
          name: 'Jeffrey Jacobs',
          mark: 5,
          field: 'Business analytics',
          text: 'Helped my dad move to other countries in 2 months'
        },
        {
          id: 2,
          name: 'Josiane Ebert',
          mark: 5,
          field: 'Business analytics',
          text:
            'Helped with migration, prepared all the documents,' +
            ' professional team and good job! I will recommend to' +
            ' all acquaintances'
        },
        {
          id: 3,
          name: 'Kristian Murazik',
          mark: 5,
          field: 'Business analytics',
          text:
            'Professional team, helped with all questions, thanks!' +
            ' professional team and good job'
        },
        {
          id: 1,
          name: 'Jeffrey Jacobs',
          mark: 4,
          field: 'Business analytics',
          text: 'Helped my dad move to other countries in 2 months'
        },
        {
          id: 2,
          name: 'Josiane Ebert',
          mark: 4,
          field: 'Business analytics',
          text:
            'Helped with migration, prepared all the documents,' +
            ' professional team and good job! I will recommend to' +
            ' all acquaintances'
        },
        {
          id: 3,
          name: 'Kristian Murazik',
          mark: 4,
          field: 'Business analytics',
          text:
            'Professional team, helped with all questions, thanks!' +
            ' professional team and good job'
        }
      ],
      services: [
        {
          id: 1,
          name: 'Home & Living',
          slug: 'home-and-living',
          icon: 'home-living.svg',
          subservices: [
            {
              id: 1,
              name: 'Temporary Accommodation',
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Pellentesque integer sit nisi morbi vulputate ultricies.' +
                ' Faucibus magna eget sit aliquet fringilla ut nulla sociis.' +
                ' Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit nisi' +
                ' morbi vulputate ultricies. Faucibus magna eget sit aliquet' +
                ' Lorem ipsum dolor sit amet, consectetur adipiscing ut nulla' +
                ' sociis. Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit' +
                ' nisi morbi vulputate ultricies.'
            },
            {
              id: 2,
              name: 'Property search / advice',
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Pellentesque integer sit nisi morbi vulputate ultricies.' +
                ' Faucibus magna eget sit aliquet fringilla ut nulla sociis.' +
                ' Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit nisi' +
                ' morbi vulputate ultricies. Faucibus magna eget sit aliquet' +
                ' Lorem ipsum dolor sit amet, consectetur adipiscing ut nulla' +
                ' sociis. Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit' +
                ' nisi morbi vulputate ultricies.'
            },
            {
              id: 3,
              name: 'Internet / phone / TV',
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Pellentesque integer sit nisi morbi vulputate ultricies.' +
                ' Faucibus magna eget sit aliquet fringilla ut nulla sociis.' +
                ' Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit nisi' +
                ' morbi vulputate ultricies. Faucibus magna eget sit aliquet' +
                ' Lorem ipsum dolor sit amet, consectetur adipiscing ut nulla' +
                ' sociis. Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit' +
                ' nisi morbi vulputate ultricies.'
            },
            {
              id: 4,
              name: 'Utilities',
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Pellentesque integer sit nisi morbi vulputate ultricies.' +
                ' Faucibus magna eget sit aliquet fringilla ut nulla sociis.' +
                ' Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit nisi' +
                ' morbi vulputate ultricies. Faucibus magna eget sit aliquet' +
                ' Lorem ipsum dolor sit amet, consectetur adipiscing ut nulla' +
                ' sociis. Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit' +
                ' nisi morbi vulputate ultricies.'
            },
            {
              id: 5,
              name: 'Interior design',
              text:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Pellentesque integer sit nisi morbi vulputate ultricies.' +
                ' Faucibus magna eget sit aliquet fringilla ut nulla sociis.' +
                ' Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit nisi' +
                ' morbi vulputate ultricies. Faucibus magna eget sit aliquet' +
                ' Lorem ipsum dolor sit amet, consectetur adipiscing ut nulla' +
                ' sociis. Ut vitae sit ac odio neque turpis arcu, massa.' +
                ' Et elementum odio non netus cras. Lorem ipsum dolor sit amet,' +
                ' consectetur adipiscing elit. Pellentesque integer sit' +
                ' nisi morbi vulputate ultricies.'
            }
          ]
        },
        {
          id: 2,
          name: 'Real Estate',
          slug: 'real-estate',
          icon: 'cityscape.svg',
          subservices: [
            {
              id: 6,
              name: 'Market review',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 7,
              name: 'Due diligence/purchase process',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 8,
              name: 'Development/Architecture/engineering',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 9,
              name: 'Priperty Management',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 10,
              name: 'Maintanence/Repairs',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        },
        {
          id: 3,
          name: 'Finance',
          slug: 'finance',
          icon: 'finance.svg',
          subservices: [
            {
              id: 11,
              name: 'Bank account',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 12,
              name: 'Mortgage',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 13,
              name: 'Other financings',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 14,
              name: 'Investment apportunities',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 15,
              name: 'Investment management',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        },
        {
          id: 4,
          name: 'Tax',
          slug: 'tax',
          icon: 'cityscape.svg',
          subservices: [
            {
              id: 16,
              name: 'NIF/Fiscal number',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 17,
              name: 'Structuring Advice',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 18,
              name: 'NHR Status',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 19,
              name: 'Social security',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 20,
              name: 'Annual tax returns',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        },
        {
          id: 5,
          name: 'Legal',
          slug: 'legal',
          icon: 'legal.svg',
          subservices: [
            {
              id: 21,
              name: 'Legal representation',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 22,
              name: 'Criminal register certificate',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 23,
              name: 'Document certification/translations',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 24,
              name: 'Contract drafting/reviewing',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 25,
              name: 'Specialist legal advice',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        },
        {
          id: 6,
          name: 'Immigrations',
          slug: 'immigrations',
          icon: 'immigrations.svg',
          subservices: [
            {
              id: 26,
              name: 'Legal representation',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 27,
              name: 'Criminal register certificate',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 28,
              name: 'Document certification/translations',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 29,
              name: 'Contract drafting/reviewing',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 30,
              name: 'Specialist legal advice',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        },
        {
          id: 7,
          name: 'Transport & Logistics',
          slug: 'transport-logistics',
          icon: 'transport-logistics.svg',
          subservices: [
            {
              id: 31,
              name: 'Packers/movers',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 32,
              name: 'Customs',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 33,
              name: 'Vehicle import/divers license',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 34,
              name: 'Car rental/purchase/maintenance',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 35,
              name: 'Storage',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        },
        {
          id: 8,
          name: 'Work & Business',
          slug: 'work-business',
          icon: 'work-business.svg',
          subservices: [
            {
              id: 36,
              name: 'Co-working spaces',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 37,
              name: 'Business incorporation',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 38,
              name: 'Accounting services',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 39,
              name: 'Recruitment/networking',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 40,
              name: 'PA/problem solving service',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        },
        {
          id: 9,
          name: 'Health',
          slug: 'health',
          icon: 'health.svg',
          subservices: [
            {
              id: 41,
              name: 'Legal representation',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 42,
              name: 'Criminal register certificate',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 43,
              name: 'Document certification/translations',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 44,
              name: 'Contract drafting/reviewing',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 45,
              name: 'Specialist legal advice',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        },
        {
          id: 10,
          name: 'Family',
          slug: 'family',
          icon: 'family.svg',
          subservices: [
            {
              id: 46,
              name: 'Visa (non-EU)',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 47,
              name: 'Residency (EU)',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 48,
              name: 'Golden Visa (non-EU)',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 49,
              name: 'Visa renewal',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 50,
              name: 'Car rental/purchase/maintenance',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        },
        {
          id: 11,
          name: 'Lifestyle',
          slug: 'lifestyle',
          icon: 'lifestyle.svg',
          subservices: [
            {
              id: 51,
              name: 'Packers/movers',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 52,
              name: 'Customs',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 53,
              name: 'Vehicle import/divers license',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 54,
              name: 'Car rental/purchase/maintenance',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
              id: 55,
              name: 'Storage',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]
        }
      ],
      teamMembers: [
        {
          id: 1,
          avatar: 'alastair-cunningham.png',
          name: 'Alastair Cunningham',
          role: 'Founder, Landing Pad',
          description:
            'If you are going to use a passage of Lorem Ipsum, you need to be' +
            " sure there isn't anything embarrassi and hidden in the middle of" +
            ' text. All the Lorem Ipsum be sure there goingyou need to be.'
        },
        {
          id: 2,
          avatar: 'chris-kraus-founder.png',
          name: 'Chris Kraus',
          role: 'Founder, Landing Pad',
          description:
            'If you are going to use a passage of Lorem Ipsum,' +
            " you need to be sure there isn't anything embarrassi and hidden" +
            ' in the middle of text. All the Lorem Ipsum be sure there' +
            ' goingyou need to be.'
        },
        {
          id: 3,
          avatar: 'chris-kraus-coo.png',
          name: 'Chris Kraus',
          role: 'COO',
          description:
            'If you are going to use a passage of Lorem Ipsum,' +
            " you need to be sure there isn't anything embarrassi and hidden" +
            ' in the middle of text. All the Lorem Ipsum be sure' +
            ' there goingyou need to be.'
        },
        {
          id: 4,
          avatar: 'our-team.png',
          name: 'Our team',
          role: '',
          description:
            'We can help you reimagine your business through a' +
            ' digital lens. Our software engineering heritage combined with our' +
            ' strategic business and innovation consulting, design thinking,' +
            ' and physical-digital'
        }
      ],
      blogPosts: [
        {
          id: 1,
          header: 'Thinking about an invest- ment property in Portugal.',
          date: 'Jun 12, 2022',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut vulputate leo sed lectus dignissim commodo. Quisque pretium,' +
            ' turpis a egestas consequat, dui purus luctus ligula, feugiat' +
            ' accumsan massa velit a lectus. Nulla scelerisque porta sapien id' +
            ' malesuada. Curabitur tempor rutrum enim at scelerisque. Vestibulum' +
            ' fermentum gravida augue in vulputate. Duis tincidunt, magna vel' +
            ' cursus commodo, est enim tristique tortor, sed suscipit ligula' +
            ' magna sed nisi. Aenean ac sapien faucibus, molestie sem vitae,' +
            ' laoreet mauris. Suspendisse consectetur lacinia suscipit.',
          img: 'blog-picture-1-1.png'
        },
        {
          id: 2,
          header: 'Thinking about an invest- ment property in Portugal.',
          date: 'Jun 12, 2022',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut vulputate leo sed lectus dignissim commodo. Quisque pretium,' +
            ' turpis a egestas consequat, dui purus luctus ligula, feugiat' +
            ' accumsan massa velit a lectus. Nulla scelerisque porta sapien id' +
            ' malesuada. Curabitur tempor rutrum enim at scelerisque. Vestibulum' +
            ' fermentum gravida augue in vulputate. Duis tincidunt, magna vel' +
            ' cursus commodo, est enim tristique tortor, sed suscipit ligula' +
            ' magna sed nisi. Aenean ac sapien faucibus, molestie sem vitae,' +
            ' laoreet mauris. Suspendisse consectetur lacinia suscipit.',
          img: 'blog-picture-2.png'
        },
        {
          id: 3,
          header: 'Thinking about an invest- ment property in Portugal.',
          date: 'Jun 12, 2022',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut vulputate leo sed lectus dignissim commodo. Quisque pretium,' +
            ' turpis a egestas consequat, dui purus luctus ligula, feugiat' +
            ' accumsan massa velit a lectus. Nulla scelerisque porta sapien id' +
            ' malesuada. Curabitur tempor rutrum enim at scelerisque. Vestibulum' +
            ' fermentum gravida augue in vulputate. Duis tincidunt, magna vel' +
            ' cursus commodo, est enim tristique tortor, sed suscipit ligula' +
            ' magna sed nisi. Aenean ac sapien faucibus, molestie sem vitae,' +
            ' laoreet mauris. Suspendisse consectetur lacinia suscipit.',
          img: 'blog-picture-3.png'
        },
        {
          id: 4,
          header: 'Thinking about an invest- ment property in Portugal.',
          date: 'Jun 12, 2022',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut vulputate leo sed lectus dignissim commodo. Quisque pretium,' +
            ' turpis a egestas consequat, dui purus luctus ligula, feugiat' +
            ' accumsan massa velit a lectus. Nulla scelerisque porta sapien id' +
            ' malesuada. Curabitur tempor rutrum enim at scelerisque. Vestibulum' +
            ' fermentum gravida augue in vulputate. Duis tincidunt, magna vel' +
            ' cursus commodo, est enim tristique tortor, sed suscipit ligula' +
            ' magna sed nisi. Aenean ac sapien faucibus, molestie sem vitae,' +
            ' laoreet mauris. Suspendisse consectetur lacinia suscipit.',
          img: 'blog-picture-4.png'
        },
        {
          id: 5,
          header: 'Thinking about an invest- ment property in Portugal.',
          date: 'Jun 12, 2022',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Ut vulputate leo sed lectus dignissim commodo. Quisque pretium,' +
            ' turpis a egestas consequat, dui purus luctus ligula, feugiat' +
            ' accumsan massa velit a lectus. Nulla scelerisque porta sapien id' +
            ' malesuada. Curabitur tempor rutrum enim at scelerisque. Vestibulum' +
            ' fermentum gravida augue in vulputate. Duis tincidunt, magna vel' +
            ' cursus commodo, est enim tristique tortor, sed suscipit ligula' +
            ' magna sed nisi. Aenean ac sapien faucibus, molestie sem vitae,' +
            ' laoreet mauris. Suspendisse consectetur lacinia suscipit.',
          img: 'blog-picture-5.png'
        }
      ]
    }
  }
})
