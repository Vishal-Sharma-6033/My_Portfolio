import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const USERNAME = "Vishal-Sharma-6033";

const GitHubSection = () => {
  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    const loadProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${USERNAME}`);
        if (!response.ok) {
          throw new Error("Failed to load GitHub profile");
        }

        const data = await response.json();
        if (!cancelled) {
          setProfile(data);
          setStatus("success");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    };

    loadProfile();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-16 bg-card/50" id="github">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          className="mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Open Source</p>
          <h2 className="text-section font-bold text-foreground">
            GitHub <span className="text-accent">activity.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.05 }}
          className="bg-card rounded-xl p-5 md:p-6 card-shadow border border-border mb-6"
        >
          {status === "loading" && <p className="text-muted-foreground">Loading GitHub profile...</p>}

          {status === "error" && (
            <p className="text-muted-foreground">
              Could not load profile details right now. You can still view the profile directly.
            </p>
          )}

          {status === "success" && profile && (
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <img
                src={profile.avatar_url}
                alt={`${profile.login} avatar`}
                className="w-16 h-16 rounded-full ring-2 ring-accent/30"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">{profile.name || profile.login}</h3>
                <p className="text-sm text-muted-foreground">@{profile.login}</p>
                {profile.bio && <p className="mt-2 text-sm text-foreground/90">{profile.bio}</p>}
              </div>
              <div className="grid grid-cols-3 gap-3 text-center sm:min-w-[260px]">
                <div className="rounded-lg bg-background p-3 border border-border">
                  <p className="text-lg font-bold text-foreground">{profile.public_repos}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Repos</p>
                </div>
                <div className="rounded-lg bg-background p-3 border border-border">
                  <p className="text-lg font-bold text-foreground">{profile.followers}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Followers</p>
                </div>
                <div className="rounded-lg bg-background p-3 border border-border">
                  <p className="text-lg font-bold text-foreground">{profile.following}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Following</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-card rounded-xl p-1 card-shadow overflow-hidden">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=E5A700&text_color=9CA3AF&icon_color=E5A700`}
              alt="GitHub Stats"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="bg-card rounded-xl p-1 card-shadow overflow-hidden">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=E5A700&text_color=9CA3AF`}
              alt="Top Languages"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.2 }}
          className="mt-6 bg-card rounded-xl p-1 card-shadow overflow-hidden"
        >
          <img
            src={`https://github-readme-streak-stats.herokuapp.com?user=${USERNAME}&theme=transparent&hide_border=true&ring=E5A700&fire=E5A700&currStreakLabel=E5A700&sideLabels=9CA3AF&currStreakNum=9CA3AF&sideNums=9CA3AF&dates=6B7280`}
            alt="GitHub Streak"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <motion.a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-foreground border border-border hover:border-muted-foreground transition-colors"
          >
            <Github size={18} />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;
