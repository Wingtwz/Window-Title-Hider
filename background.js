browser.storage.onChanged.addListener(async () => await refresh_titlebar());
browser.windows.onCreated.addListener(async () => await refresh_titlebar());
browser.windows.onRemoved.addListener(async () => await refresh_titlebar());
browser.tabs.onCreated.addListener(async () => await refresh_titlebar());
browser.tabs.onRemoved.addListener(async () => await refresh_titlebar());

const refresh_titlebar = async () => {
	const windows = await browser.windows.getAll();
	const info = await browser.runtime.getBrowserInfo();
	let prefix = 'New tab - Mozilla Firefox ' + info.version + ' - ';

	storage = await browser.storage.local.get('prefix');

	windows.forEach(async window => {
		await browser.windows.update(window.id, { titlePreface: storage.prefix || prefix });
	});
};
