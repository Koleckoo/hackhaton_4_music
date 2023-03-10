import ArtistDetail from "../ArtistPage/ArtistDetail/ArtistDetail";
import ArtistPage from "../ArtistPage/ArtistPage";
import GenrePage from "../GenrePage/GenrePage";
import Homepage from "../Homepage/Homepage";
import InstrumentPage from "../InstrumentPage/InstrumentPage";
import ReleasePage from "../ReleasePage/ReleasePage";
import InstrumentDetail from "../InstrumentPage/InstrumentDetail";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/Artists",
    element: <ArtistPage />,
  },
  {
    path: "/Artists/:id/releases",
    element: <ReleasePage />,
  },
  {
    path: "/Artists/:id",
    element: <ArtistDetail />,
  },
  {
    path: "/genres",
    element: <GenrePage />,
  },
  {
    path: "/instruments",
    element: <InstrumentPage />,
  },
  {
    path: "/instruments/:id",
    element: <InstrumentDetail />,
  },
];
export default routes;
