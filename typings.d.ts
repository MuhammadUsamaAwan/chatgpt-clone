interface Message {
  text: string;
  createdAt: admin.firestore.Timestamps;
  user: {
    _id: string;
    name: string;
    avatar: string | null;
  };
}
