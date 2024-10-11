/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
const SAMPLE_FEATURES = {
  show_dialog_box: true,
  enable_new_pricing: true,
};

// cache
const Cache = {
  featureFlags: {},
  timeStamp: null,
};
// set to 10 seconds
const MAX_CACHE_TTL = 10000;
// for queue use
let fetchInstance = null;

// returns the state of *all* features for the current user
function fetchAllFeatures() {
  // should happen once
  console.log('call to backend');
  // mocking the fetch API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(SAMPLE_FEATURES), 100);
  });
}

// DO NOT CHANGE THE FUNCTION NAME
function getFeatureState(featureName, defaultValue) {
  // cache data present?
  const isCacheDataPresent = Object.keys(Cache.featureFlags).length;
  const isCacheDataFresh = Date.now() - Cache.timeStamp < MAX_CACHE_TTL;

  if (isCacheDataFresh && isCacheDataPresent) {
    console.log('returning from cache', featureName);
    const value = Object.prototype.hasOwnProperty.call(
      Cache.featureFlags,
      featureName
    )
      ? Cache.featureFlags[featureName]
      : defaultValue;
    return Promise.resolve(value);
  }

  // queue all subsequent fetch requests
  // fetchInstance = null -> continue
  // next call in pending state
  //
  if (fetchInstance instanceof Promise) {
    return fetchInstance
      .then((featureFlags) => {
        console.log('from promise callback', featureName);
        return Object.prototype.hasOwnProperty.call(featureFlags, featureName)
          ? featureFlags[featureName]
          : defaultValue;
      })
      .catch(() => defaultValue);
  }

  // write your solution here
  // fetchAllFeatures is a promise
  fetchInstance = fetchAllFeatures()
    .then((featureFlags) => {
      // storing the cache
      Cache.featureFlags = featureFlags;
      // time in epoch
      Cache.timeStamp = Date.now();
      //return featureFlags[featureName || defaultValue]
      // false || true
      // true
      return Object.prototype.hasOwnProperty.call(featureFlags, featureName)
        ? featureFlags[featureName]
        : defaultValue;
    })
    .catch(() => defaultValue);

  return fetchInstance;
}

getFeatureState('show_dialog_box', false).then(function (isEnabled) {
  if (isEnabled) {
    console.log('show_dialog_box enabled');
  } else {
    console.log('show_dialog_box disabled');
  }
});
getFeatureState('show_editor', false).then(function (isEnabled) {
  if (isEnabled) {
    console.log('show_editor enabled');
  } else {
    console.log('show_editor disabled');
  }
});
getFeatureState('show_pricing_v2', false).then(function (isEnabled) {
  if (isEnabled) {
    console.log('show_pricing_v2 enabled');
  } else {
    console.log('show_pricing_v2 disabled');
  }
});

// make the first call
// get the data in 100ms
// store
// next call after 300ms
// return the value from cache
setTimeout(() => {
  getFeatureState('enable_new_pricing', false).then(function (isEnabled) {
    if (isEnabled) {
      console.log('enable_new_pricing enabled');
    } else {
      console.log('enable_new_pricing disabled');
    }
  });
}, 300);
