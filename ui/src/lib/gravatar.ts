export interface GravatarOptions {
  size?: number;
  default?: string;
  rating?: "g" | "pg" | "r" | "x";
}

export async function getGravatarUrl(
  email: string,
  options: GravatarOptions = {}
): Promise<string> {
  const {
    size = 80,
    default: defaultImage = "identicon",
    rating = "g",
  } = options;

  const lowercaseEmail = email.toLowerCase();
  const emailHash = await md5(lowercaseEmail);

  const url = new URL(`https://www.gravatar.com/avatar/${emailHash}`);
  url.searchParams.append("s", size.toString());
  url.searchParams.append("d", defaultImage);
  url.searchParams.append("r", rating);

  return url.toString();
}

async function md5(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("MD5", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
