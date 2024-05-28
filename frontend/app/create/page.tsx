import type { Metadata } from "next";
import { TITLE, DESCRIPTION } from '../utils/constants';
import { PageCreate } from '../components/PageCreate';

export const metadata: Metadata = {
    title: `${TITLE} | CREATE`,
    description: DESCRIPTION,
  }

const Create = () => {
    return (
        <PageCreate />
    );
}

export default Create;