export type FriendsRequest = {
  current_page: number;
  total_pages: number;
  friends: [
    {
      id: string;
      name: string;
      avatar_url: string;
      amount_friends: number;
      inactivated_at: string;
      cashback: number;
      planName: string;
    },
  ];
};
