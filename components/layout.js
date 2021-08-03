import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Aomsin";
export const siteTitle = "Aomsin";

export default function Layout({ children, home }) {
  return (
    <iframe
      width="600"
      height="450"
      src="https://datastudio.google.com/embed/reporting/fdfe6c09-3e88-475a-b172-a545520bfd67/page/R9nWC"
      frameborder="0"
      style="border:0"
      allowfullscreen
    ></iframe>
  );
}
