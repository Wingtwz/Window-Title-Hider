
browser.storage.onChanged.addListener(async () => await update_titlebar());
browser.windows.onCreated.addListener(async () => await update_titlebar());
browser.windows.onRemoved.addListener(async () => await update_titlebar());
browser.tabs.onCreated.addListener(async () => await update_titlebar());
browser.tabs.onRemoved.addListener(async () => await update_titlebar());

const update_titlebar = async () => {
	const info = await browser.runtime.getBrowserInfo();
	const windows = await browser.windows.getAll();
	let prefix = info.vendor + ' ' + info.name + ' ' + info.version;

	windows.forEach(async window => {
		await browser.windows.update(window.id, { titlePreface: prefix });
	});
};

