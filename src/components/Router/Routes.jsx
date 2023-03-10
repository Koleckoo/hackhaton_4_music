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
    path: "/Artists/:id/releases",
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
