<script lang="ts">
  import BaseLayout from "../components/BaseLayout.svelte";
  import RetroOutline from "../components/ui/RetroOutline.svelte";
  import { Link, navigate } from "svelte-routing";
  import { pb } from '../lib/pocketbase';

  let email = '';
  let password = '';
  let error = '';

  async function handleLogin() {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);
      console.log('Logged in:', authData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
      error = 'Invalid email or password';
    }
  }

</script>

<BaseLayout>
  <div class="bg-white flex items-center justify-center min-h-screen">
    <RetroOutline className='max-w-md'>
      <div class="bg-white p-6">
        <h1 class="text-2xl font-bold mb-6">Login</h1>

        <p class="mb-4">
          Don't have an account? <Link
            to="/register"
            class="text-blue-600 hover:underline">Register</Link
          >
        </p>

        <form on:submit|preventDefault={handleLogin}>
          <div class="mb-4">
            <label for="email" class="block mb-2"
              >Email or Username <span class="text-red-500">*</span></label
            >
            <p class="text-sm text-gray-500 mb-1">
              Either email or username is accepted.
            </p>
            <input
              type="text"
              id="email"
              name="email"
              class="w-full px-3 py-2 border border-gray-300"
              bind:value={email}
              required
            />
          </div>

          <div class="mb-6">
            <label for="password" class="block mb-2"
              >Password <span class="text-red-500">*</span></label
            >
            <div class="relative">
              <input
                type="password"
                id="password"
                bind:value={password}
                name="password"
                class="w-full px-3 py-2 border border-gray-300 pr-10"
                required
              />
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {#if error}
            <div class="text-red-500 text-sm pb-4">{error}</div>
          {/if}
          <button
            type="submit"
            class="w-full bg-black text-white py-2 hover:bg-gray-800"
            >Login</button
          >
        </form>

        <div class="mt-4">
          <a href="#" class="text-blue-600 hover:underline"
            >Forgot your password? Request reset</a
          >
        </div>

        <div class="mt-2">
          <a href="#" class="text-blue-600 hover:underline"
            >Not yet verified? Request verification</a
          >
        </div>
      </div>
    </RetroOutline>
  </div>
</BaseLayout>
