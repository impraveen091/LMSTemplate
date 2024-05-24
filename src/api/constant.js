import images from '../assets/images';
import {
  Art_Icon,
  Fashion_Icon,
  Graphic_Icon,
  Marketing_Icon,
  MasterCard,
  Photography_Icon,
  Software_Icon,
  Uiux_Icon,
} from '../assets/svgs';
import strings from '../i18n/strings';

const OnBoardingSlide = [
  {
    title: strings.onBoardingDesc1,
    subtitle: strings.onBoardingSubtitle1,
    image: images.onBordingImg1,
  },
  {
    title: strings.onBoardingDesc2,
    subtitle: strings.onBoardingSubtitle2,
    image: images.onBordingImg2,
  },
  {
    title: strings.onBoardingDesc3,
    subtitle: strings.onBoardingSubtitle3,
    image: images.onBordingImg3,
  },
];

const LearningPaths = [
  {
    title: 'illustration',
    id: 1,
  },
  {
    title: 'Graphic design',
    id: 2,
  },
  {
    title: 'UI/UX',
    id: 3,
  },
  {
    title: 'Web design',
    id: 4,
  },
  {
    title: 'Motion design',
    id: 5,
  },
  {
    title: '3D design',
    id: 6,
  },
];

const Categories = [
  {
    id: 1,
    title: 'IT & Software',
    icon: <Software_Icon />,
  },
  {
    id: 2,
    title: 'UIUX DESIGN',
    icon: <Uiux_Icon />,
  },
  {
    id: 3,
    title: 'Graphic',
    icon: <Graphic_Icon />,
  },
  {
    id: 4,
    title: 'Marketing',
    icon: <Marketing_Icon />,
  },
  {
    id: 5,
    title: 'photography',
    icon: <Photography_Icon />,
  },
  {
    id: 6,
    title: 'Fashion',
    icon: <Fashion_Icon />,
  },
  {
    id: 7,
    title: 'Art',
    icon: <Art_Icon />,
  },
];

const Recommended = [
  {
    id: 1,
    title: 'Sketching: Transform Your Doodles into Art',
    image: images.course1,
  },
  {
    id: 2,
    title: 'Illustration Techniques to Unlock your Creativity',
    image: images.course2,
  },
  {
    id: 3,
    title: 'Creativity',
    image: images.course3,
  },
  {
    id: 4,
    title: 'Inside a Creative Notebook: Explore Your Illustration Process',
    image: images.course4,
  },
  {
    id: 5,
    title: 'Daniel Wallet',
    image: images.course5,
  },
];
const Popular = [
  {
    id: 1,
    title: 'Sketching: Transform Your Doodles into Art',
    image: images.course5,
  },
  {
    id: 2,
    title: 'Illustration Techniques to Unlock your Creativity',
    image: images.course4,
  },
  {
    id: 3,
    title: 'Creativity',
    image: images.course3,
  },
  {
    id: 4,
    title: 'Inside a Creative Notebook: Explore Your Illustration Process',
    image: images.course4,
  },
  {
    id: 5,
    title: 'Daniel Wallet',
    image: images.course5,
  },
];
const Featured = [
  {
    id: 1,
    title: 'Sketching: Transform Your Doodles into Art',
    image: images.course2,
  },
  {
    id: 2,
    title: 'Illustration Techniques to Unlock your Creativity',
    image: images.course3,
  },
  {
    id: 3,
    title: 'Creativity',
    image: images.course4,
  },
  {
    id: 4,
    title: 'Inside a Creative Notebook: Explore Your Illustration Process',
    image: images.course1,
  },
  {
    id: 5,
    title: 'Daniel Wallet',
    image: images.course5,
  },
];

const NotificationData = [
  {
    title: 'Today',
    data: [
      {
        id: 1,
        image: images.course1,
        title: '30% Special Discount!',
        description: 'Special promotion only valid today',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 1,
        image: images.course2,
        title: 'Sketching: Transform Your Doodl...',
        description: 'You have to top up your e-wallet',
      },
      {
        id: 1,
        image: images.course3,
        title: 'New Services Available!',
        description: 'Now you can track orders in real time',
      },
    ],
  },
  {
    title: 'December 22, 2024',
    data: [
      {
        id: 1,
        image: images.course4,
        title: 'Sketching: Transform Your Doodl...',
        description: 'Credit Card has been linked!',
      },
      {
        id: 1,
        image: images.course5,
        title: 'Sketching: Transform Your Doodl...',
        description: 'Your account has been created!',
      },
    ],
  },
];

const topSearch = [
  {
    id: 1,
    title: 'Python',
  },
  {
    id: 2,
    title: 'Javascript',
  },
  {
    id: 3,
    title: 'Java',
  },
  {
    id: 4,
    title: 'Excel',
  },
  {
    id: 5,
    title: 'Illustration',
  },
  {
    id: 6,
    title: 'Watercolor',
  },
  {
    id: 7,
    title: 'Procreate',
  },
];

const level = [
  {
    id: 1,
    title: 'All',
    is_Selected: false,
    category: 'level',
  },
  {
    id: 2,
    title: 'Foundation',
    is_Selected: false,
    category: 'level',
  },
  {
    id: 3,
    title: 'Beginner',
    is_Selected: false,
    category: 'level',
  },
  {
    id: 4,
    title: 'Intermediate',
    is_Selected: false,
    category: 'level',
  },
  {
    id: 5,
    title: 'Expert',
    is_Selected: false,
    category: 'level',
  },
];

const prices = [
  {
    id: 1,
    title: 'Free',
    is_Selected: false,
    category: 'prices',
  },
  {
    id: 2,
    title: '1$ - 20$',
    is_Selected: false,
    category: 'prices',
  },
  {
    id: 3,
    title: '20$ - 40$',
    is_Selected: false,
    category: 'prices',
  },
  {
    id: 4,
    title: '40$ - 60$',
    is_Selected: false,
    category: 'prices',
  },
  {
    id: 5,
    title: '> 60$',
    is_Selected: false,
    category: 'prices',
  },
];

const ratings = [
  {
    id: 1,
    title: '4.0 - 5.0',
    is_Selected: false,
    category: 'ratings',
  },
  {
    id: 2,
    title: '3.0 - 4.0',
    is_Selected: false,
    category: 'ratings',
  },
  {
    id: 3,
    title: '2.0 - 3.0',
    is_Selected: false,
    category: 'ratings',
  },
  {
    id: 4,
    title: '1.0 - 2.0',
    is_Selected: false,
    category: 'ratings',
  },
  {
    id: 5,
    title: '0 - 1.0',
    is_Selected: false,
    category: 'ratings',
  },
];

const subtitles = [
  {
    id: 1,
    title: 'English',
    is_Selected: false,
    category: 'subtitles',
  },
  {
    id: 2,
    title: 'None',
    is_Selected: false,
    category: 'subtitles',
  },
];

const lessonArray = [
  {
    lesson_no: 'D1',
    lesson_id: 1,
    lesson_title: 'Introduction',
    videos: [
      {
        video_id: 1,
        video_title: 'About Me',
        video_length: '05:05',
        video_status: 'unwatched',
        video_completed_length: '100',
        video_thumbnail: images.course5,
      },
      {
        video_id: 2,
        video_title: 'Influences',
        video_length: '05:05',
        video_status: 'unwatched',
        video_completed_length: '50',
        video_thumbnail: images.course1,
      },
    ],
  },
  {
    lesson_no: 'D2',
    lesson_id: 2,
    lesson_title: 'Tools for a Creator',
    videos: [
      {
        video_id: 1,
        video_title: 'Materials and Tools',
        video_length: '07:30',
        video_status: 'unwatched',
        video_completed_length: '10',
        video_thumbnail: images.course5,
      },
      {
        video_id: 2,
        video_title: 'Elements of Portfolio',
        video_length: '10:15',
        video_status: 'unwatched',
        video_completed_length: '0',
        video_thumbnail: images.course4,
      },
      {
        video_id: 3,
        video_title: 'Characters, Setting, and Storytelling',
        video_length: '10:15',
        video_status: 'unwatched',
        video_completed_length: '0',
        video_thumbnail: images.course2,
      },
    ],
  },
  {
    lesson_no: 'D3',
    lesson_id: 3,
    lesson_title: 'Final Project',
    videos: [
      {
        video_id: 1,
        video_title: 'Last exercise',
        video_length: '09:20',
        video_status: 'unwatched',
        video_completed_length: '0',
        video_thumbnail: images.course5,
      },
      {
        video_id: 2,
        video_title: 'Evaluate exercise',
        video_length: '12:05',
        video_status: 'unwatched',
        video_completed_length: '0',
        video_thumbnail: images.course1,
      },
    ],
  },
];

const reviewArray = [
  {
    review_id: 1,
    reviewer_name: 'John Doe',
    review_date: 'December 20, 2022',
    review_rating: 4,
    review_comment:
      "Great product! I'm loving it!Great product! I'm loving it!Great product! I'm loving it!Great product! I'm loving it!Great product! I'm loving it!",
    reviewer_image: images.profile1,
  },
  {
    review_id: 2,
    reviewer_name: 'Jane Smith',
    review_date: 'December 20, 2022',
    review_rating: 5,
    review_comment: "The best service I've ever experienced!",
    reviewer_image: images.profile2,
  },
  {
    review_id: 3,
    reviewer_name: 'Michael Johnson',
    review_date: 'December 20, 2022',
    review_rating: 3,
    review_comment: 'Decent, but could be improved.',
    reviewer_image: images.profile1,
  },
  {
    review_id: 4,
    reviewer_name: 'Emily Brown',
    review_date: 'December 20, 2022',
    review_rating: 4,
    review_comment: 'Excellent customer support!',
    reviewer_image: images.profile2,
  },
  {
    review_id: 5,
    reviewer_name: 'David Lee',
    review_date: 'December 20, 2022',
    review_rating: 2,
    review_comment: 'Not satisfied with the product quality.',
    reviewer_image: images.profile1,
  },
];

const creditCardArray = [
  {
    card_id: 1,
    card_number_last4: '5678',
    card_holder: 'Duong Khanh',
    expiration_date: '12/24',
    card_type: 'Visa',
    card_icon: <MasterCard />,
    is_default: true,
    card_number: '1234567812345678',
  },
  {
    card_id: 2,
    card_number_last4: '5678',
    card_holder: 'Duong Khanh',
    expiration_date: '06/25',
    card_type: 'MasterCard',
    card_icon: <MasterCard />,
    is_default: false,
    card_number: '1234567812345678',
  },
  {
    card_id: 3,
    card_number_last4: '5678',
    card_holder: 'Duong Khanh',
    expiration_date: '09/23',
    card_type: 'American Express',
    card_icon: <MasterCard />,
    is_default: false,
    card_number: '1234567812345678',
  },
];

const MyProfile = {
  full_name: 'Khanh Duong',
  bio_description:
    'I’m interested in what I do, trying to make the world better& more beautiful.',
  followers: '1.4M',
  likes: '25M',
  following: '9K',
  profile_image: images.profile1,
  cover_image: images.course5,
};

const ProjectArray = [
  {
    project_title: 'Illustration: Find your Art Style',
    likes: 1.0,
    image: images.course1,
  },
  {
    project_title: 'Another Project',
    likes: 2.0,
    image: images.course2,
  },
  {
    project_title: 'Art Workshop',
    likes: 3.0,
    image: images.course4,
  },
  {
    project_title: 'Creative Journey',
    likes: 4.0,
    image: images.course5,
  },
];

const MyLearningCourse = [
  {
    id: 1,
    title: 'Sketching: Transform Your Doodles into Art',
    image: images.course1,
    progress: 50,
  },
  {
    id: 2,
    title: 'Illustration Techniques to Unlock your Creativity',
    image: images.course2,
    progress: 0,
  },
  {
    id: 3,
    title: 'Creativity',
    image: images.course3,
    progress: 70,
  },
  {
    id: 4,
    title: 'Inside a Creative Notebook: Explore Your Illustration Process',
    image: images.course4,
    progress: 10,
  },
  {
    id: 5,
    title: 'Daniel Wallet',
    image: images.course5,
    progress: 100,
  },
];

const Achievements = [
  {
    id: 1,
    title: 'Sketching: Transform Your Doodles into Art',
    image: images.course1,
    completed_date: '1st Jan, 2022',
    grade: '99%',
  },
  {
    id: 2,
    title: 'Illustration Techniques to Unlock your Creativity',
    image: images.course2,
    completed_date: '1st Jan, 2022',
    grade: '99%',
  },
  {
    id: 3,
    title: 'Creativity',
    image: images.course3,
    completed_date: '1st Jan, 2022',
    grade: '99%',
  },
  {
    id: 4,
    title: 'Inside a Creative Notebook: Explore Your Illustration Process',
    image: images.course4,
    completed_date: '1st Jan, 2022',
    grade: '99%',
  },
  {
    id: 5,
    title: 'Daniel Wallet',
    image: images.course5,
    completed_date: '1st Jan, 2022',
    grade: '99%',
  },
];

const MyWishList = [
  {
    id: 1,
    collection_title: 'Creative Courses',
    collection_image: images.course1,
  },
  {
    id: 2,
    collection_title: 'My Favourite Courses',
    collection_image: images.course2,
  },
  {
    id: 3,
    collection_title: 'Hand drawing courses',
    collection_image: images.course3,
  },
  {
    id: 4,
    collection_title: 'Digital Painting Courses',
    collection_image: images.course4,
  },
  {
    id: 5,
    collection_title: 'Water color Courses',
    collection_image: images.course1,
  },
  {
    id: 6,
    collection_title: 'Creative Courses',
    collection_image: images.course5,
  },
];

const videoData = [
  {
    id: 1,
    channelName: 'Rashmika_Mandanna',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259931882-f8e1a398-ef01-4a2d-a6a3-3d23bfff4a47.mp4',
    caption:
      'Rashmika Mandanna is an Indian actress and model who works in Telugu and Kannada films. She made her acting debut in the Kannada film Cheluvi (2011).',
    musicName: 'Song #1',
    likes: '10.2M',
    comments: '284K',

    bookmark: '120K',
    share: '1.2M',
    categoty: 'Entertainment',
    avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    poster:
      'https://user-images.githubusercontent.com/129170600/231969719-2cd83643-5b10-4d41-98c5-d0c0d939bfd7.jpg',
    views: '21.2M',
  },
  {
    id: 2,
    channelName: 'zuzu_fan',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259932024-2756b534-623f-45c7-b18f-7fd18cf1eac6.mp4',
    caption: '#cute #girls #tikto #tiktoapp #tiktofan #tiktofans',
    musicName: 'Song #2',
    likes: '24K',
    comments: '122',
    bookmark: '1K',
    share: '1.2K',
    categoty: 'Sports & Gaming',
    avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    poster:
      'https://user-images.githubusercontent.com/129170600/231969791-ef979955-921b-4773-8971-7c03c1ba9edf.jpeg',
    views: '2.2M',
  },
  {
    id: 3,
    channelName: 'katrinakaif',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259932103-71a17813-20d9-47c2-9661-aa1de579c578.mp4',
    caption: 'kat hot dance #katrinakaif #dance #hot #sexy #bollywood #india',
    musicName: 'Song #3',
    likes: '31k',
    comments: '801',
    bookmark: '1.2K',
    share: '110',
    categoty: 'News & Politics',
    avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    poster:
      'https://user-images.githubusercontent.com/129170600/231969855-618e8d6b-e3dd-4db3-8836-f361b3ee5832.jpg',
    views: '220K',
  },
  {
    id: 4,
    channelName: 'zesu__123',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259932150-10d26687-7faf-4fae-a36f-31350d4188cb.mp4',
    poster:
      'https://user-images.githubusercontent.com/129170600/231969921-72e1dcb1-4af6-41b9-a824-3e6b9213e872.jpeg',
    caption:
      'Zesu...... #hot #hollywood #sexy #girls #tikto #tiktoapp #tiktofan #tiktofans',
    musicName: 'Song #4',
    likes: '432K',
    comments: '284',
    bookmark: '12K',
    share: '13K',
    categoty: 'Style & Fashion',
    avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    views: '510K',
  },
  {
    id: 5,
    channelName: 'tikto_fan',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259932223-5a2ce971-18c2-42c5-a46e-b4043fb75199.mp4',
    poster:
      'https://user-images.githubusercontent.com/129170600/231969994-09ab3ca2-90c7-484e-bf91-1208f3d47ff0.jpeg',
    caption: 'Hotty and cute #tikto #tiktoapp #tiktofan #tiktofans',
    musicName: 'Song #5',
    likes: '241K',
    comments: '12K',

    bookmark: '2.3K',
    share: '145',
    categoty: 'Nature & Travel',
    avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    views: '7.8M',
  },
  {
    id: 6,
    channelName: 'anushkasharma',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259932282-83626d40-4b6d-46f6-ab05-5eedea22dbb8.mp4',
    poster:
      'https://user-images.githubusercontent.com/129170600/231970010-773f30db-3977-4276-a8dc-7882b54a111d.jpeg',
    caption: 'Feel the love in the air #anushkasharma #india #bollywood #hot',
    musicName: 'Song #6',
    likes: '310K',
    comments: '81K',

    bookmark: '10K',
    share: '88K',
    categoty: 'Nature & Travel',
    avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    views: '345K',
  },
  {
    id: 7,
    channelName: 'ayodhya_wale',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259932352-e40dd1e9-3f15-4878-af22-08765bfd1a2a.mp4',
    poster:
      'https://user-images.githubusercontent.com/129170600/231970027-0ee9b05e-52a6-4e77-81ae-5f38af8bf1f4.jpeg',
    caption: 'ram navmi #ramnavmi #ayodhya #ram #ramayana #ramayan #ramji',
    musicName: 'Song #7',
    likes: '321K',
    comments: '28K',

    bookmark: '120K',
    share: '111.2K',
    categoty: 'God & Religion',
    avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    views: '670K',
  },
  {
    id: 8,
    channelName: 'shiddat_ka_safar',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259932623-7811b87a-190a-45ab-9450-dd618603f6e4.mp4',
    poster:
      'https://user-images.githubusercontent.com/129170600/231970045-6a572624-0653-4cfa-a3e4-516daf00f23c.jpeg',
    caption:
      'Love some one #love #Shiddat #tikto #tiktoapp #tiktofan #tiktofans',
    musicName: 'Song #8',
    likes: '241k',
    comments: '15k',

    bookmark: '1.5K',
    share: '1.2K',
    categoty: 'Film & Animation',
    avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    views: '622K',
  },
  {
    id: 9,
    channelName: 'mahakal_bhakt',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259932898-dfebb8e3-9195-47d0-8bf1-6722e33d4497.mp4',
    poster:
      'https://user-images.githubusercontent.com/129170600/231970060-9ed373d9-bc3f-4f35-a7cb-29c01b69b792.jpeg',
    caption: 'Har har mahadev #mahakal #mahadev #shiv #shivji #shivji #shivji',
    musicName: 'Song #9',
    likes: '782K',
    comments: '80K',

    bookmark: '1.2K',
    share: '2.5K',
    categoty: 'God & Religion',
    avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    views: '1.4M',
  },
  {
    id: 10,
    channelName: 'gujju_smile',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259932988-54ac5504-b8d5-47bb-97a5-b5679e8ccc0e.mp4',
    poster:
      'https://user-images.githubusercontent.com/129170600/231970075-8cdf2e42-c345-4a58-83be-5bc4fb9f2376.jpeg',
    caption:
      'Gujju smile #gujju #gujarat #gujarati #gujaratis #gujaratis #gujaratis',
    musicName: 'Song #10',
    likes: '4321',
    comments: '2841',

    bookmark: '12K',
    share: '13K',
    categoty: 'music & Dance',
    avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    views: '110K',
  },
  {
    id: 11,
    channelName: 'nughty_meme',
    uri: 'https://github-production-user-asset-6210df.s3.amazonaws.com/129170600/259931882-f8e1a398-ef01-4a2d-a6a3-3d23bfff4a47.mp4',
    poster:
      'https://user-images.githubusercontent.com/129170600/231972475-a35385a3-7584-443d-843b-75104af589f6.jpeg',
    caption: 'Nora Fatehi #meme #nughty #nughty_meme #nughty_meme',
    musicName: 'Song #11',
    likes: '321K',
    comments: '28K',

    bookmark: '120K',
    share: '111.2K',
    categoty: 'Film & Animation',
    avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    views: '1.7M',
  },
];

export {
  OnBoardingSlide,
  LearningPaths,
  Categories,
  Recommended,
  Popular,
  Featured,
  NotificationData,
  topSearch,
  level,
  prices,
  ratings,
  subtitles,
  lessonArray,
  reviewArray,
  creditCardArray,
  MyProfile,
  ProjectArray,
  MyLearningCourse,
  Achievements,
  MyWishList,
  videoData,
};
