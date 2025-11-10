<script lang="ts">
	import { queryA, queryB } from '$lib/data.remote';

    const isALoading = $derived(queryA().loading);
	const b = queryB();

    $inspect(isALoading, "A loading");
    $inspect(b.loading, "B loading");

</script>

<h1>Refresh page: a expected to *not* be loading</h1>


<p>A: {isALoading ? "A Loading..." : queryA().current}</p>
<p>B: {b.loading ? "B Loading..." : b.current}</p>
