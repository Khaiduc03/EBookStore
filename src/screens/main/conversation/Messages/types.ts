import { MessageI } from '../../../../redux';

export interface IMessage {
  isUser: boolean;
  text: string;
  time: string;
  image?: string;
}

export type AvatarProps = {
  onPressAvatar?: () => void;
  isZoomable?: boolean;
};

export const ListMessage: MessageI[] = [
  {
    uuid: '9b74e306-e5b4-47b4-8a85-a17a5f9db10e',
    message:
      'volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-11-04 23:02:32',
    updated_at: '2022-11-15 16:36:13',
  },
  {
    uuid: '1f9d2d4d-0116-44f0-99ed-1da0bdd18632',
    message:
      'cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-09-02 03:32:08',
    updated_at: '2022-12-27 12:50:00',
  },
  {
    uuid: '93bcb9ba-17bd-45c1-8e4a-57f585fcf53b',
    message:
      'vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-08-02 12:53:49',
    updated_at: '2023-03-05 02:24:47',
  },
  {
    uuid: '98432399-1ef9-48f6-841a-05634e45e514',
    message:
      'at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-04-12 00:59:33',
    updated_at: '2023-05-28 14:14:54',
  },
  {
    uuid: 'd3f021e2-9294-407a-af5e-19b8d1ab1b9d',
    message:
      'est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-09-22 00:07:51',
    updated_at: '2023-10-12 22:09:03',
  },
  {
    uuid: 'b39cdf9e-c32b-476f-9def-f5808d2c70cf',
    message:
      'nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-11-01 20:46:05',
    updated_at: '2022-12-21 03:29:30',
  },
  {
    uuid: '885d39f7-0606-4b26-ad4d-bf62e92e9639',
    message:
      'ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2022-12-15 02:53:06',
    updated_at: '2023-08-20 04:46:07',
  },
  {
    uuid: '3c11e1c6-00e6-4de0-a659-a2975884b171',
    message:
      'pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-08-31 02:19:29',
    updated_at: '2023-11-03 13:14:28',
  },
  {
    uuid: '94b0b7f2-ddba-479c-8b71-0b26048b526d',
    message:
      'nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-07-21 05:09:29',
    updated_at: '2023-09-19 17:52:50',
  },
  {
    uuid: 'c997609b-dcf5-48cc-b790-f0648ec4e010',
    message:
      'duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-08-22 07:58:50',
    updated_at: '2023-07-21 23:01:46',
  },
  {
    uuid: 'a8a60073-e8b2-435a-a7f3-45206007f1bf',
    message:
      'et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-05-26 07:31:36',
    updated_at: '2022-12-22 06:27:29',
  },
  {
    uuid: '9823b908-17ee-4cc8-b3b9-b45fd6d06689',
    message:
      'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-02-10 05:30:30',
    updated_at: '2023-09-05 14:00:10',
  },
  {
    uuid: '00d78d81-213d-4288-8050-4f2ec2d9516d',
    message:
      'amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: '2023-11-05 21:20',
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-04-20 05:28:14',
    updated_at: '2023-05-02 12:47:21',
  },
  {
    uuid: '3c768cf0-4db8-4bc0-9396-3051fd990d51',
    message:
      'praesent lectus vestibulum quam sapien varius ut blandit non interdum in',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2022-11-21 09:34:08',
    updated_at: '2023-01-28 01:48:17',
  },
  {
    uuid: '84e6ca1c-7c90-4fa7-85cc-8121aecc1a6d',
    message:
      'neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-08-15 00:11:44',
    updated_at: '2023-08-02 22:42:46',
  },
  {
    uuid: 'c45ab5f0-542d-4f4c-bad9-a77e860ef823',
    message:
      'curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-04-21 01:59:51',
    updated_at: '2023-05-22 07:21:57',
  },
  {
    uuid: 'f4d73d1a-7113-4fdd-8664-ebc0159e0a2f',
    message:
      'et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2022-11-20 06:51:27',
    updated_at: '2023-05-30 12:58:44',
  },
  {
    uuid: '292c239b-a0ef-436a-b540-75eed1ad440b',
    message: 'non interdum in ante vestibulum ante ipsum primis in faucibus',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2022-12-16 12:42:01',
    updated_at: '2023-09-09 01:22:13',
  },
  {
    uuid: '9933c51b-8415-4672-bd5a-401f7e813c75',
    message:
      'lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-08-22 02:30:38',
    updated_at: '2023-08-24 18:37:58',
  },
  {
    uuid: 'e1cc916d-1783-4916-875a-4aed40d959de',
    message:
      'rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-07-05 18:27:21',
    updated_at: '2023-03-03 08:03:25',
  },
  {
    uuid: '7aca4824-5f97-4b19-9394-2c35f9dedf07',
    message:
      'adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-04-19 16:51:58',
    updated_at: '2023-02-12 06:29:40',
  },
  {
    uuid: '51103644-bb32-407f-8eae-42cc2a97c3bd',
    message:
      'ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2022-12-17 23:38:53',
    updated_at: '2023-02-09 07:54:41',
  },
  {
    uuid: '66df88b8-5acd-4037-93e5-0a85d1cad7d3',
    message:
      'iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-04-17 00:46:58',
    updated_at: '2023-05-02 16:00:26',
  },
  {
    uuid: '29fb67ba-5888-47ce-af4e-3579772d82e5',
    message:
      'dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-09-13 02:24:30',
    updated_at: '2023-06-14 00:46:28',
  },
  {
    uuid: '1b2c7801-86bc-4423-9c72-f15f111b7d3d',
    message: 'mi sit amet lobortis sapien sapien non mi integer ac neque duis',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2022-11-27 20:21:44',
    updated_at: '2023-09-13 21:32:15',
  },
  {
    uuid: 'b563c91e-b253-48a5-a80f-c54f31e1d24e',
    message:
      'metus aenean fermentum donec ut mauris eget massa tempor convallis',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-06-26 12:02:04',
    updated_at: '2023-06-24 22:18:22',
  },
  {
    uuid: 'd14a6ce6-32c3-41a0-900c-fad476a7c148',
    message:
      'volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-08-23 21:15:02',
    updated_at: '2023-06-22 22:17:40',
  },
  {
    uuid: 'b88227d0-12e7-4ea9-a1e0-27a938dc4d1d',
    message:
      'volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-02-10 01:13:11',
    updated_at: '2023-11-09 16:38:52',
  },
  {
    uuid: '6a8e5025-fd73-45fd-8ddd-cbeb5c5f3d3f',
    message:
      'iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-02-21 18:39:23',
    updated_at: '2023-10-29 14:02:27',
  },
  {
    uuid: '4027d504-e110-4ab6-92e1-40c178843d35',
    message:
      'lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-07-05 00:12:57',
    updated_at: '2023-05-05 02:26:24',
  },
  {
    uuid: '72407dd6-3efb-480d-9bff-43067aa1a1e2',
    message:
      'euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-04-20 13:43:48',
    updated_at: '2022-11-24 20:28:12',
  },
  {
    uuid: '4e5a0d6a-eb8a-477a-8ea7-770469605636',
    message:
      'lectus in est risus auctor sed tristique in tempus sit amet sem fusce',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-02-28 17:14:11',
    updated_at: '2022-11-26 17:33:12',
  },
  {
    uuid: 'b98bc90f-e5fa-4e4d-a404-bbd6eb73a0fe',
    message:
      'at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2022-12-25 18:19:20',
    updated_at: '2023-05-18 19:30:02',
  },
  {
    uuid: 'fc9bc875-72a5-46ce-af5a-d9b780bf5b5f',
    message:
      'dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2022-12-21 13:44:15',
    updated_at: '2023-08-05 16:20:52',
  },
  {
    uuid: '02f2747f-d135-4c70-8294-a10c73216640',
    message:
      'lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-04-09 17:59:09',
    updated_at: '2023-07-01 11:31:15',
  },
  {
    uuid: '0f288c2e-76a6-4435-8d60-c943b3af4ce4',
    message: 'sapien sapien non mi integer ac neque duis bibendum morbi',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-06-20 07:17:47',
    updated_at: '2023-11-08 07:40:36',
  },
  {
    uuid: '4d19e311-d380-4e1f-88e0-58b865bf27b5',
    message:
      'quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-03-22 08:27:30',
    updated_at: '2023-03-11 15:23:30',
  },
  {
    uuid: 'edbe2c12-787f-4354-b320-72ed3c84a981',
    message:
      'eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-03-25 07:47:08',
    updated_at: '2023-03-24 14:03:43',
  },
  {
    uuid: '6576a71d-7763-4494-8cd6-8898d94a8f47',
    message:
      'orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-10-16 09:28:46',
    updated_at: '2023-07-12 20:24:26',
  },
  {
    uuid: 'f1678742-855e-43d8-a384-d184e7edd4f3',
    message:
      'posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-03-29 01:16:25',
    updated_at: '2023-06-15 05:32:18',
  },
  {
    uuid: '4d51e865-60a1-4500-b4e3-4929b9e3f73d',
    message:
      'nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-04-16 04:36:24',
    updated_at: '2023-06-13 15:14:30',
  },
  {
    uuid: 'dbe72c9a-e86b-4676-8a79-6ec198af27cb',
    message:
      'etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-03-06 19:11:02',
    updated_at: '2022-11-26 17:58:44',
  },
  {
    uuid: 'c3290350-5972-4c45-ac8e-d2a115d24672',
    message:
      'pede justo eu massa donec dapibus duis at velit eu est congue elementum',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-04-09 03:07:28',
    updated_at: '2023-05-14 04:22:02',
  },
  {
    uuid: '309d9d26-2296-466f-9ba6-b4ed3df0f8bd',
    message:
      'et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2022-12-05 11:48:15',
    updated_at: '2023-05-07 08:06:01',
  },
  {
    uuid: '53faf78e-3368-40c4-b723-eeaaa540cc93',
    message:
      'odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-04-02 15:58:24',
    updated_at: '2023-06-28 03:41:04',
  },
  {
    uuid: '3342b4cf-12bf-4e84-8dac-3e3fba72b9a3',
    message:
      'nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-08-07 03:15:39',
    updated_at: '2023-04-15 18:07:42',
  },
  {
    uuid: '5e89b270-cbbd-463b-8e41-6ddc5b281bef',
    message:
      'lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-02-10 15:19:54',
    updated_at: '2023-02-26 22:16:44',
  },
  {
    uuid: '8fdfdccb-406d-432c-a3f8-78c2cf2b58b7',
    message:
      'felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2023-06-23 04:30:30',
    updated_at: '2023-02-17 06:12:45',
  },
  {
    uuid: 'c9d3835f-f03b-4dba-b8d9-4b3b1006a08e',
    message:
      'posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: 'cff6492f-637b-4fd2-874b-0e3b532e21fc',
    created_at: '2023-03-21 19:13:30',
    updated_at: '2023-05-12 10:35:29',
  },
  {
    uuid: '73556d9b-1282-4c33-85b9-9e6c184b6e77',
    message:
      'habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla',
    conversation_uuid: 'ef28d294-55a5-46e8-b936-bd87a3d61adf',
    deleted_at: null,
    user_uuid: '72ea4f00-3571-4bd3-92b4-b6347b35e1ab',
    created_at: '2022-12-15 20:51:04',
    updated_at: '2023-10-20 13:56:57',
  },
];


export const messages: IMessage[] = [
  {
    isUser: false,
    text: 'Hello! David Beckham',
    time: '9:00 AM',
  },
  {
    isUser: false,
    text: 'I hope you are doing well. I am writing to check in and see how you are feeling. I am always thinking of you, and I hope you are healthy and happy. If there is anything I can do to help, please do not hesitate to reach out.',
    time: '9:06 AM',
  },
  {
    isUser: true,
    text: "Hi! I'm fine.",
    time: '9:07 AM',
  },
  {
    isUser: true,
    text: 'Thank you for asking about my health these days. How are you doing? Where are you living?',
    time: '9:10 AM',
  },
  {
    isUser: false,
    text: "Sorry, I'm busy right now and can't reply to you later",
    time: '9:16 AM',
  },
  {
    isUser: true,
    text: "When you have free time, let's meet for coffee.",
    time: '9:20 AM',
  },
  {
    isUser: false,
    text: 'Today. I have free time',
    time: '9:22 AM',
  },
  {
    isUser: false,
    text: 'I like chicken hihi',
    time: '9:24 AM',
  },
  {
    isUser: true,
    text: 'Oh, haha',
    time: '9:30 AM',
  },
  {
    isUser: false,
    text: 'Oh, hehe',
    time: '9:35 AM',
  },
  {
    isUser: true,
    text: 'hihi',
    time: '9:38 AM',
  },
];
