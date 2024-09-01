export const columnTable = [
  {
    Header: "Sno",
    accessor: "id",
    disableFilters: true,
  },
  {
    Header: "First name",
    accessor: "first_name",
  },
  {
    Header: "Last name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "EmailAddress1",
  },
  {
    Header: "Country",
    accessor: "Country",
  },
  {
    Header: "Phone",
    accessor: "Phone",
  },
  {
    Header: "Status",
    accessor: "status",
    filterType: "select",
  },
  // {
  //   Header: "Actions",
  //   Cell: ({ row }) => <ActionsCell row={row} />,
  // },
];
