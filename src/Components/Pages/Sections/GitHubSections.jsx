import { useEffect } from "react";
import { useState } from "react";
import Counter from "../../Elements/Counter";
import { Token } from "../../Elements/Token";
import axios from "axios";

const GitHubSections = () => {
  const [commits, setCommits] = useState(0);
  const [gitUser, setgistUser] = useState();
  const [gitRepos, setGitRepos] = useState();

  const config = {
    headers: { Authorization: `Bearer ${Token}` },
  };

  const getDate = () => {
    const date = new Date();
    const olddate = new Date(2020, 11, 17);
    return 12 * (date.getFullYear() - olddate.getFullYear());
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/search/commits?q=author:OldSinner", config)
      .then((res) => {
        setCommits(res.data.total_count);
      })
      .catch((err) => {});
    axios
      .get("https://api.github.com/users/OldSinner/repos", config)
      .then((res) => {
        setGitRepos(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="p-5 flex flex-col md:text-2xl m-5">
      <div className="text-2xl md:text-4xl"> GitHub Stats</div>
      <Counter
        afterText={"Public Repos"}
        value={gitRepos?.length}
        space
        timeDif={200}
      />
      <Counter value={commits} afterText={"Commits"} timeDif={20} space />
      <Counter
        afterText={"Months of programming"}
        space
        value={getDate()}
        timeDif={200}
      />
      <a
        href="https://github.com/OldSinner"
        className="brounded-full animate-pulse
        "
      >
        Click me
      </a>
    </div>
  );
};
export default GitHubSections;
