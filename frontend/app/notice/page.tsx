import { PageNotice } from "../components/PageNotice";
import type { Metadata } from "next";
import { TITLE, DESCRIPTION } from '../utils/constants';

export const metadata: Metadata = {
  title: `${TITLE} | NOTICE`,
  description: DESCRIPTION,
}

const Notice = () => {
    return (
        <PageNotice />
    );
}

export default Notice;