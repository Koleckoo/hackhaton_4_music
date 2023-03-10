import ArtistPage from "../ArtistPage/ArtistPage";
import GenrePage from "../GenrePage/GenrePage";
import Homepage from "../Homepage/Homepage";
import InstrumentPage from "../InstrumentPage/InstrumentPage";
import ReleasePage from "../ReleasePage/ReleasePage";


const routes = [
    {
        path: "/",
        element: < Homepage />
    },

    {
        path: "/Artist/:id",
        element: < ArtistPage/>
    },
    {
        path: "/Artist/:id/releases",
        element: < ReleasePage/>
    },
    {
        path: "/genres",
        element: < GenrePage/>
    },
    {
        path: "/instruments",
        element: < InstrumentPage/>
    },
    

]