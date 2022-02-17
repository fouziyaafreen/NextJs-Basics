import { Fragment } from "react";
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <p><Link href="/nested/dynamic">Dynamic Page URL</Link></p>
    </Fragment>
  );
}

export default NewsPage;
