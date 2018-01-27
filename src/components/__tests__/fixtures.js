export const tabs = () => [
  { id: '0001', title: 'Title 1', text: "<p>Description here</p>" },
  { id: '0010', title: 'Title 2', text: "<p>Description here</p>" },
  { id: '0101', title: 'Title 3', text: "<p>Description here</p>", media: "fake://img.con" }
];


export const tabGroup = () => ({
  tabs: tabs()
});