export interface TeamMember {
  id: string;
  name: string;
  rm: string;
  class: string;
  role: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}
