/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import { fetch } from "@yext/pages/util";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import Card from "../components/card";
import { ExternalImage } from "../types/ExternalImage";
import Favicon from "../public/yext-favicon.ico";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
  SandboxEndpoints,
} from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
  } from "@yext/search-ui-react";
import DocCard from "../components/DocCard";




/**
 * Not required depending on your use case.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "turtlehead-tacos",
};

/**
 * A local type for transformProps. This could live in src/types but it's generally
 * best practice to keep unshared types local to their usage.
 */
type ExternalImageData = TemplateProps & { externalImage: ExternalImage };

/**
 * Used to either alter or augment the props passed into the template at render time.
 * This function will be run during generation and pass in directly as props to the default
 * exported function.
 *
 * This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
 * source. This example calls a public API and returns the data.
 *
 * If the page is truly static this function is not necessary.
 */
export const transformProps: TransformProps<ExternalImageData> = async (
  data
) => {
  const url = import.meta.env.YEXT_PUBLIC_EXTERNAL_IMAGE_API_BASE_URL + "/2";
  const externalImage = (await fetch(url).then((res: any) =>
    res.json()
  )) as ExternalImage;
  return { ...data, externalImage };
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<ExternalImageData> = () => {
  return `index.html`;
};

type ExternalImageRenderData = TemplateRenderProps & {
  externalImage: ExternalImage;
};




/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
 export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
      {
        type: "link",
        attributes: {
          rel: 'icon',
          type: 'image/x-icon',
          href: Favicon
        },
      }
    ],
  };
};


const headlessConfig: HeadlessConfig = {
  apiKey: "122ed3e710c9cc889a71ce0918071899",
  experienceKey: "dentist-search",
  locale: "en",
  endpoints: SandboxEndpoints,
};

const searcher = provideHeadless(headlessConfig);


/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `getStaticProps`.
 */
const Static: Template<ExternalImageRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  externalImage,
}) => {
  const { _site } = document;

  return (
    <>
      <PageLayout _site={_site}>
        <div className="centered-container">
          <div className=" w-full bg-cover bg-center h-auto bg-[url(https://wallpaperaccess.com/full/1366120.jpg)] text-5xl font-bold text-white p-40 flex items-center justify-center flex-col gap-x-14 gap-y-10 ">
            <h1>Welcome to Turtlehead Tacos</h1>
          </div>
          <SearchHeadlessProvider searcher={searcher}>
            <div className="px-4 py-8">
              <div className="mx-auto flex max-w-5xl flex-col">
                <SearchBar />
                <SpellCheck />
                <ResultsCount />
                <VerticalResults
                  CardComponent={DocCard}
                  displayAllOnNoResults={false}
                />
              </div>
              <Pagination />
            </div>
          </SearchHeadlessProvider>
          <div className="space-y-5 text-center font-medium text-2xl">
            <p className="p-10 font-sans">
            Looking for a new dentist? Philadelphia magazine partnered with dental researcher topDentists, LLC to create a definitive list of the best dentists in Philly, including experts in fields such as periodontics, endodontics, orthodontics and more. Find a dentist near you using our carefully curated list to discover a specialist who will make you smile. Plus, check out Philadelphia magazine’s 2022 Top Dentist Featured Profiles from our March issue now!
            </p>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Static;
