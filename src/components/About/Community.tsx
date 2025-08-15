import ViewOnGithubButton from "./ViewOnGithubButton";

export default function Community() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        Join the Community
      </h2>
      <p className="text-gray-600">
        Coloured Icons is built with and for the developer community. We welcome
        contributions, suggestions, and feedback to make this project even
        better.
      </p>
      <ViewOnGithubButton />
    </section>
  );
}
