export type FriendsRequest = {
  currentPage: number;
  totalPages: number;
  friends: [
    {
      id: string;
      name: string;
      cashback: number;
      amountFriends: number;
      avatar_url: string;
      inactivated_at: string;
    },
  ];
};
