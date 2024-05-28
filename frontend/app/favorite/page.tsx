import type { Metadata } from "next";
import { TITLE, DESCRIPTION } from '../utils/constants';
import { PageFavorite } from "../components/PageFavorite";

export const metadata: Metadata = {
    title: `${TITLE} | FAVORITE`,
    description: DESCRIPTION,
  }

const Favorite = () => {
    return (
        <PageFavorite />
    );
}

export default Favorite;