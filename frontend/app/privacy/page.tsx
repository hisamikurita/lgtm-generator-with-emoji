import { PagePrivacy } from "../components/PagePrivacy";
import type { Metadata } from "next";
import { TITLE, DESCRIPTION } from '../utils/constants';

export const metadata: Metadata = {
  title: `${TITLE} | PRIVACY`,
  description: DESCRIPTION,
}

const Privacy = () => {
    return (
        <PagePrivacy />
    );
}

export default Privacy;