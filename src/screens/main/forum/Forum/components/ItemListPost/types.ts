export interface Post {
  id: number;
  name?: string;
  avatar?: string;
  images?: string[];
  createAt?: string;
  description?: string;
  likeCount?: number;
  commentCount?: number;
}

export interface forumData {
  uuid: string;
  user_uuid: string;
  user_avatar: string | null;
  user_fullname: string | null;
  content: string;
  status: boolean;
  images: string[];
  like_count: number;
  like_uuid: string | null;
  is_liked: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}

export const data: Post[] = [
  {
    id: 1,
    name: 'Ronaldo',
    avatar:
      'https://cdnimg.vietnamplus.vn/t660/uploaded/mzdic/2023_03_24/cristiano_ronaldo_portugal_2403.jpg',
    images: [
      'https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-videoSixteenByNine3000.jpg',
      'https://nld.mediacdn.vn/291774122806476800/2022/12/9/13-ronaldo-16705925694541880121770.jpg',
      'https://vtv1.mediacdn.vn/zoom/640_400/2016/cristiano-ronaldo-gbehmbtwr8d614mr1yuvyofuk-1478966420870.jpg',
      'https://cdnimg.vietnamplus.vn/t660/uploaded/mzdic/2023_03_24/cristiano_ronaldo_portugal_2403.jpg',
    ],
    createAt: '18/02/2023 at 22:23',
    description: 'Champion in the hearts of fans',
    likeCount: 123,
    commentCount: 4564,
  },
  {
    id: 2,
    name: 'Mbappe',
    avatar:
      'https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/7/11/photo1689046066172-168904606639344355855.jpg',
    images: [
      'https://lapagina.com.sv/wp-content/uploads/2023/06/mbappe-psg-kspF-1920x1080@RC.jpeg',
      'https://cdn.resfu.com/media/img_news/afp_en_6c44b0b13c948d5291da1aed7ba30cf5cdc7baba.jpg?size=1000x&lossy=1',
      'https://file3.qdnd.vn/data/images/0/2022/12/05/hieu_tv/a1.jpg?dpi=150&quality=100&w=870',
    ],
    createAt: '18/02/2023 at 22:23',
    description: 'World Cup champion',
    likeCount: 456,
    commentCount: 1233,
  },
  {
    id: 3,
    name: 'Neymar Jr',
    avatar:
      'https://image-cdn.essentiallysports.com/wp-content/uploads/2023-08-23T074718Z_74867642_RC2JT2AW6PAL_RTRMADP_3_SOCCER-SAUDI-ALH-NEYMAR-1110x1065.jpg',
    images: [
      'https://images.thewest.com.au/publication/C-12242008/88411a38946dffc9e0caf34e89454f719973c11d-16x9-x0y312w3000h1688.jpg?imwidth=810&impolicy=wan_v3',
      'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F12%2Fneymar-jr-skip-ballon-dor-2018-call-of-duty-001.jpg?cbr=1&q=90',
    ],
    createAt: '18/02/2023 at 22:23',
    description: 'World Cup champion',
    likeCount: 456,
    commentCount: 1233,
  },
  {
    id: 4,
    name: 'Earling Haland',
    avatar:
      'https://media.gq.com/photos/63c03de4352b23af388578fc/master/pass/000079060004_V4.jpg',
    images: [
      'https://media.tinthethao.com.vn/files/bongda/2023/05/04/erling-haaland-man-city-vs-rb-leipzig-031423-2320jpg.jpg',
      'https://www.leparisien.fr/resizer/a9QAuhDjYVpmp0F0CfDNkFKRXq0=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/SSIVALSQKRAFHP53HNZ5HN3V3U.jpg',
    ],
    createAt: '18/02/2023 at 22:23',
    description: 'World Cup champion',
    likeCount: 456,
    commentCount: 1233,
  },
  {
    id: 5,
    name: 'Julian Alvarez',
    avatar:
      'https://storage.fussballdaten.de/source/1//person/imago/1020173539//1020173539.jpeg',
    images: [
      'https://baokhanhhoa.vn/file/e7837c02857c8ca30185a8c39b582c03/dataimages/202301/original/images5535114_Erling_Haaland_hay_Julian_Alvarez_1.jpg',
      'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta1ef00a98d67afd1/650a0793a3d9376643173969/Julian_Alvarez_Manchester_City_2023-24.jpg?auto=webp&format=pjpg&width=3840&quality=60',
    ],
    createAt: '18/02/2023 at 22:23',
    description: 'World Cup champion',
    likeCount: 456,
    commentCount: 1233,
  },
  // {
  //   id: 6,
  //   name: 'Mbappe',
  //   avatar:
  //     'https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/7/11/photo1689046066172-168904606639344355855.jpg',
  //   images: [
  //     'https://lapagina.com.sv/wp-content/uploads/2023/06/mbappe-psg-kspF-1920x1080@RC.jpeg',
  //     'https://cdn.resfu.com/media/img_news/afp_en_6c44b0b13c948d5291da1aed7ba30cf5cdc7baba.jpg?size=1000x&lossy=1',
  //   ],
  //   createAt: '18/02/2023 at 22:23',
  //   description: 'World Cup champion',
  //   likeCount: 456,
  //   commentCount: 1233,
  // },
  // {
  //   id: 7,
  //   name: 'Mbappe',
  //   avatar:
  //     'https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/7/11/photo1689046066172-168904606639344355855.jpg',
  //   images: [
  //     'https://lapagina.com.sv/wp-content/uploads/2023/06/mbappe-psg-kspF-1920x1080@RC.jpeg',
  //     'https://cdn.resfu.com/media/img_news/afp_en_6c44b0b13c948d5291da1aed7ba30cf5cdc7baba.jpg?size=1000x&lossy=1',
  //   ],
  //   createAt: '18/02/2023 at 22:23',
  //   description: 'World Cup champion',
  //   likeCount: 456,
  //   commentCount: 1233,
  // },
  // {
  //   id: 8,
  //   name: 'Mbappe',
  //   avatar:
  //     'https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/7/11/photo1689046066172-168904606639344355855.jpg',
  //   images: [
  //     'https://lapagina.com.sv/wp-content/uploads/2023/06/mbappe-psg-kspF-1920x1080@RC.jpeg',
  //     'https://cdn.resfu.com/media/img_news/afp_en_6c44b0b13c948d5291da1aed7ba30cf5cdc7baba.jpg?size=1000x&lossy=1',
  //   ],
  //   createAt: '18/02/2023 at 22:23',
  //   description: 'World Cup champion',
  //   likeCount: 456,
  //   commentCount: 1233,
  // },
];
