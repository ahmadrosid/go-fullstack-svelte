<script>
  export let className = "";
  export let childClassName = "";
</script>

<div class="relative inline-block w-full {className}">
  <div class="absolute z-0 left-1 top-1 -right-1 -bottom-1 bg-gray-800 border-[2px] border-gray-800" aria-hidden="true"></div>
  <div class="relative bg-white border-2 border-gray-800 h-full {childClassName}"><slot></slot></div>
</div>
