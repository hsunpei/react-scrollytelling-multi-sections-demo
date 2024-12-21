import './styles.css';

import { useRef } from 'react';

import { StickyContainerTailwind } from '@react-scrollytelling/layout';
import { useSectionScrollSpring } from '@react-scrollytelling/react-spring';

import { BackgroundGraphics } from './BackgroundGraphics';
import { SectionDescription } from './components/SectionDescription';

export default function App() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrolledRatioSpring } = useSectionScrollSpring(sectionRef);

  return (
    <div className="App" ref={sectionRef}>
      <StickyContainerTailwind
        overlay={
          <div className="ml-auto mr-auto max-w-screen-2xl">
            <div className="flex px-3">
              <div className="lg:w-1/2"></div>
              <div className="w-full lg:w-1/2">
                <div className="relative h-screen w-full">
                  <div className="absolute bottom-10 w-full">
                    <h1 className="red-hat-display-black text-5xl text-blue-500 md:text-7xl">
                      Exposed: The Secret Chats
                    </h1>
                    <p className="mt-6 font-sans text-lg font-medium text-slate-500 md:text-xl">
                      A gripping look at the encrypted conversations that unraveled one of the most
                      shocking financial scandals in modern history
                    </p>
                  </div>
                </div>
                <div className="pb-[50vh]"></div>
                <SectionDescription>
                  <p className="mt-6 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                    augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                    fermentum gravida.
                  </p>
                </SectionDescription>
                <SectionDescription>
                  <p className="mt-6 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae orci a
                    augue vehicula pretium vel vel metus. Suspendisse tincidunt leo tincidunt
                    fermentum gravida.
                  </p>
                </SectionDescription>
              </div>
            </div>
          </div>
        }
      >
        {/* Put sticky background here */}
        <BackgroundGraphics scrolledRatioSpring={scrolledRatioSpring} />
      </StickyContainerTailwind>

      <div className="flex h-48 items-center justify-center bg-slate-200 text-slate-700">
        Illustrations - &nbsp;
        <a
          href="https://www.humaaans.com/"
          target="_blank"
          className="text-blue-600"
          rel="noreferrer"
        >
          humaaans
        </a>
      </div>
    </div>
  );
}
