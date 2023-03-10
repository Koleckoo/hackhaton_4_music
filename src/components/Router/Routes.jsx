import ArtistDetail from "../ArtistPage/ArtistDetail/ArtistDetail";
import ArtistPage from "../ArtistPage/ArtistPage";
import GenrePage from "../GenrePage/GenrePage";
import Homepage from "../Homepage/Homepage";
import InstrumentPage from "../InstrumentPage/InstrumentPage";
import ReleasePage from "../ReleasePage/ReleasePage";

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
    path: "/Artists/:id",
    element: <ArtistDetail />,
  },
  {
    path: "/Artists/releases",
    element: <ReleasePage />,
  },
  {
    path: "/genres",
    element: <GenrePage />,
  },
  {
    path: "/instruments",
    element: <InstrumentPage />,
  },
];

export default routes;
