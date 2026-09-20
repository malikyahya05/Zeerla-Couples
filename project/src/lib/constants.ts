export const BOOKING_URL =
  'https://www.fresha.com/book-now/zeerla-spa-usyuofm2/all-offer?id=552795&pId=516899';

export const WHATSAPP_URL = 'https://wa.me/971502068805';

export const GOOGLE_MAPS_URL = 'https://goo.gl/maps/6RgTrV7U5V21m3QK8';

export const PHONE_NUMBER = '+971 50 206 8805';
export const PHONE_LINK = 'tel:00971502068805';

export const EMAIL = 'info@zeerla.com';

export const INSTAGRAM_URL = 'https://www.instagram.com/zeerlaspa/';

export const ADDRESS = {
  line1: 'Zeerla Spa',
  line2: 'Concord Tower, Dubai Media City',
  line3: 'Dubai, United Arab Emirates',
};

export const HOURS = 'Sun–Thu: 11:30am – 2:00am · Fri–Sat: 11:30am – 3:00am';

export const HERO_IMAGE =
  'https://images.pexels.com/photos/3852263/pexels-photo-3852263.jpeg?auto=compress&cs=tinysrgb&w=1600';

export const SECTION_IMAGES = {
  experience:
    'https://images.pexels.com/photos/7365434/pexels-photo-7365434.jpeg?auto=compress&cs=tinysrgb&w=1200',
  jacuzzi:
    'https://images.pexels.com/photos/7365437/pexels-photo-7365437.jpeg?auto=compress&cs=tinysrgb&w=1200',
  massage:
    'https://images.pexels.com/photos/6628601/pexels-photo-6628601.jpeg?auto=compress&cs=tinysrgb&w=1200',
  privateRoom:
    'https://images.pexels.com/photos/7598366/pexels-photo-7598366.jpeg?auto=compress&cs=tinysrgb&w=1200',
  interior:
    'https://images.pexels.com/photos/17640381/pexels-photo-17640381.jpeg?auto=compress&cs=tinysrgb&w=1200',
  gallery1:
    'https://images.pexels.com/photos/7365414/pexels-photo-7365414.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery2:
    'https://images.pexels.com/photos/14929512/pexels-photo-14929512.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery3:
    'https://images.pexels.com/photos/4170175/pexels-photo-4170175.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery4:
    'https://images.pexels.com/photos/7598373/pexels-photo-7598373.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery5:
    'https://images.pexels.com/photos/6628649/pexels-photo-6628649.jpeg?auto=compress&cs=tinysrgb&w=800',
  gallery6:
    'https://images.pexels.com/photos/17640380/pexels-photo-17640380.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const REVIEWS: Review[] = [
  {
    name: 'Bhavia Parveen',
    text: 'Great place, booked a stress relief couple massage which was taken care of by BB and Patty. They both were professional and pleasant. Loved the techniques and stretching. The place was cozy, chic and NEAT!!',
  },
  {
    name: 'Masoumeh Rajabi',
    text: 'We had a couple massage at Zeerla Spa and had an amazing experience, very relaxing and friendly staff. Shirley was my therapist and she was great, caring and excellent at giving massage. I highly recommend Shirley',
  },
  {
    name: 'Zoubia',
    text: 'Great expérience. Went with my husband for a couple package, it was perfect. Hammam and massage from the staff is so relaxing, definetely recommand it ! And thé view from the jaccuzi is stunning !',
  },
];

export interface Review {
  name: string;
  text: string;
}

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'Is the Jacuzzi private?',
    a: 'Yes. The Jacuzzi is private for your experience.',
  },
  {
    q: 'Can couples have their massage together?',
    a: 'Yes, the couples massage is enjoyed together in a private treatment room.',
  },
  {
    q: 'How much is the couples experience?',
    a: 'The 90-minute experience is AED 640 for two, and the 120-minute experience is AED 800 for two.',
  },
  {
    q: 'Where is Zeerla Spa?',
    a: 'We are located in Concord Tower, Dubai Media City, Dubai.',
  },
  {
    q: 'Do I need to book in advance?',
    a: 'Advance booking is recommended to secure your preferred time.',
  },
  {
    q: 'Can I ask about availability before booking?',
    a: 'Absolutely. Customers can contact Zeerla directly on WhatsApp to check availability or ask questions.',
  },
];
