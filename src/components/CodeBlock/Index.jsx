import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
function Index({ code, language, showLineNumbers }) {
  return (
    <>
      <div class="blockCodePreview">
        <CopyBlock
          text={code}
          language={language}
          showLineNumbers={showLineNumbers}
          theme={dracula}
          wrapLines
        />
      </div>
    </>
  );
}

export default Index;
