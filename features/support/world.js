import { setWorldConstructor, setDefaultTimeout } from 'cucumber';

const defaultTimeout = 30 * 1000;
setDefaultTimeout(defaultTimeout);

class GummiBearsWorld {
}

setWorldConstructor(GummiBearsWorld);
