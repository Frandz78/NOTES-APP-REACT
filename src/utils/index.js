const getInitialData = () => [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
    color: "#FF8C42",
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
    color: "#B39CD0",
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
    color: "#A3E635",
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
    color: "#76C7C0",
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
    color: "#F28B82",
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
    color: "#FBEA85",
  },
  {
    id: 7,
    title: "Judul-1",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: true,
    color: "#BFBFBF",
  },
  {
    id: 8,
    title: "Judul-2",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: true,
    color: "#FF8C42",
  },
  {
    id: 9,
    title: "Judul-3",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: true,
    color: "#B39CD0",
  },
  {
    id: 10,
    title: "Judul-4",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: true,
    color: "#A3E635",
  },
  {
    id: 11,
    title: "Judul-5",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: true,
    color: "#76C7C0",
  },
  {
    id: 12,
    title: "Judul-6",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?",
    createdAt: "2024-04-14T04:27:34.572Z",
    archived: true,
    color: "#F28B82",
  },
  {
    id: 13,
    title: "Judul-7",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptates quidem deserunt optio aliquam ea, sint aut dolorem. Autem, qui?Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    createdAt: "2025-04-14T04:27:34.572Z",
    archived: true,
    color: "#FBEA85",
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
