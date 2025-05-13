      {/* Habilidades Técnicas */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Habilidades Técnicas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            { skill: "React", rating: 5 },
            { skill: "Next.js", rating: 5 },
            { skill: "TypeScript", rating: 4 },
            { skill: "Tailwind", rating: 5 },
          ].map(({ skill, rating }) => (
            <div key={skill}>
              <p className="text-zinc-200 font-medium">{skill}</p>
              <div className="flex gap-1 text-yellow-400">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </div>
            </div>
          ))}
        </div>
      </div>