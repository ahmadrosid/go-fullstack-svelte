<script>
  import Twitter from "./BrandIcon/Twitter.svelte";
  import Instagram from "./BrandIcon/Instagram.svelte";
  import Github from "./BrandIcon/Github.svelte";

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Product", links: ["Features", "Case studies"] },
    { title: "Resources", links: ["Documentation", "Tutorials", "GitHub Repository"] },
    { title: "Legal", links: ["Terms", "Privacy", "Licenses"] },
  ];

  const socialIcons = [
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Github, href: "#" },
  ];
</script>

<footer class="bg-black text-gray-300">
  <div class="container max-w-6xl mx-auto px-4 py-12">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
      {#each footerLinks as section}
        <div>
          <h3 class="text-white font-semibold mb-3">{section.title}</h3>
          <ul>
            {#each section.links as link}
              <li class="mb-2">
                <a
                  href="#"
                  class="hover:text-white transition-colors duration-300"
                  >{link}</a
                >
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div
      class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
    >
      <div class="mb-4 md:mb-0">
        <p>&copy; {currentYear} Fullstack Go. All rights reserved.</p>
      </div>
      <div class="flex space-x-4">
        {#each socialIcons as { icon, href }}
          <a
            {href}
            class="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <svelte:component this={icon} class="w-5 h-5 text-white" />
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>
