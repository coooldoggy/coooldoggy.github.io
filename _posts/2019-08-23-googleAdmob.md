---
title: Recycler View에 Admob 추가
tags: Android
---

Google에서 RecyclerView에 Admob을 추가하는 예제를 소개해두었지만, 여기서는 정적인 list를 구현하는 방법만을 소개하고 있다.
list의 끝에서 스크롤링할 때에 Api를 call해서 list를 지속적으로 갱신한다면 index계산에 꽤나 시간이걸린다 ..
그래서 내가 index계산한 방법을 포스팅해보고자 한다.

먼저 google에서 제공하는 sample source는 <a href="https://github.com/googleads/googleads-mobile-android-examples/tree/master/java/advanced/BannerRecyclerViewExample
>여기</a>에서 볼 수 있다.


먼저 recyclerview의 adapter class를 정의해야한다.
이 프로젝트에서는 adapter class를 Activity안에 정의하였다.
따라서 Activity이름이라고 되어있는 부분은 이 class가 속한 activiy이름으로 변경하면 된다.

```java

public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

        private RecyclerView recyclerView;
        Context context;

        ArrayList<Object> recyclerlist = new ArrayList<>();
        ViewGroup parent;


        public RecyclerAdapter(Context context, RecyclerView recyclerView, ArrayList<Object> recyclerlist) {
            this.context = context;
            this.recyclerView = recyclerView;
            this.recyclerlist = recyclerlist;
        }

        public class AdViewHolder extends RecyclerView.ViewHolder {
            private AdView adView;

            AdViewHolder(View view) {
                super(view);
            }
        }

        @Override
        public int getItemViewType(int position) {
            if (recyclerlist.get(position) instanceof AdView) {
                return AD_TYPE;
            } else {
                return CONTENT_TYPE;
            }
        }

        @NonNull
        @Override
        public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            Activity이름.RecyclerAdapter.ViewHolder viewHolder = null;

            switch (viewType) {
                case Define.CONTENT_TYPE:
                    View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_list, parent, false);
                    return new Activity이름.RecyclerAdapter.ViewHolder(v);
                case Define.AD_TYPE:
                default:
                    View bannerAdView = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_adview, parent, false);
                    return new Activity이름.RecyclerAdapter.AdViewHolder(bannerAdView);
            }
        }

        @Override
        public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
            int type = getItemViewType(position);
            switch (type) {
                case AD_TYPE:
                    AdViewHolder bannerHolder = (AdViewHolder) holder;
                    final AdView adView = (AdView) recyclerlist.get(position);
                    final ViewGroup adCardView = (ViewGroup) bannerHolder.itemView;
                    if (adCardView.getChildCount() > 0) {
                        adCardView.removeAllViews();
                    }
                    if (adView.getParent() != null) {
                        ((ViewGroup) adView.getParent()).removeView(adView);
                    }
                    adCardView.addView(adView);
                    break;

                case CONTENT_TYPE: {

                    armyholder.bind(position);
                }
            }
        }

        @Override
        public int getItemCount() {
            return this.recyclerlist.size();
        }

        public class ViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

            RelativeLayout main_layout;

            public ViewHolder(View itemView) {
                super(itemView);
            }

            public void bind(int position) {
                this.position = position;
            }

            @Override
            public void onClick(View view) {
                }
            }
        }

    }
```

여기에서 Object 배열로 선언한 이유는 배열에 Adview와 list data를 공통으로 넣어 사용하기 떄문이다.
따라서 전체 리스트도 Object로 선언한다.

```java
 private ArrayList<Object> alRecyclerlist = new ArrayList<>();
```

item_adview.xml은 다음과 같다.

```java
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    android:orientation="vertical"
    xmlns:android="http://schemas.android.com/apk/res/android" android:layout_width="match_parent"
    android:layout_height="wrap_content">
</LinearLayout>
```
여기서 중요한 점은 height를 wrap_content로 선언하는 것이다.
match_parent로 선언하면 리스트를 스크롤할 때마다 공간이 늘어나는 버그가 생긴다.


oncreate부분에서 recyclerview setting은 다음과 같다.

```java
        mRecyclerView = (RecyclerView) v.findViewById(R.id.recyclerview);
        mAdapter = new RecyclerAdapter(this.getActivity(), mRecyclerView, alRecyclerlist);

        mLayoutManager = new LinearLayoutManager(getActivity());
        mRecyclerView.setLayoutManager(mLayoutManager);
        mRecyclerView.setItemAnimator(new DefaultItemAnimator());
        mRecyclerView.setHasFixedSize(true);
        mRecyclerView.setAdapter(mAdapter);
```

Adview를 넣는데 2개의 method가 필요한데 
1. 처음 list가 로드되면 Adview를 넣는 함수
2. 처음 list에서 데이터가 추가되었을때 Adview를 넣는 함수

이렇게 두개가 필요하다. 

첫번째 함수는 다음과 같다.

```java
private void addBannerAds() {
        for (int i = ITEMS_PER_AD - 1; i < alRecyclerlist.size(); i += ITEMS_PER_AD) {
            final AdView adView = new AdView(mContext);
            adView.setAdSize(AdSize.LARGE_BANNER);
            adView.setAdUnitId(getString(R.string.test_id));
            if (!(alRecyclerlist.get(i) instanceof AdView)) {
                alRecyclerlist.add(i, adView);
            }
            AdRequest adRequest = new AdRequest.Builder().build();
            adView.loadAd(adRequest);
        }
        mAdapter.notifyDataSetChanged();
    }
```

ITEMS_PER_AD는 list에서 몇개마다 광고를 보여줄 것인지 정해서 선언하면된다.

두번째 함수는 이미 들어있는 list에서 마지막 Adview가 들어간 index 다음부터 Adview를 넣어주는 함수이다.

 ```java
  private void addBannersAfterLoaded(int addedData) {
        addedData = alRecyclerlist.size() - addedData;
        int lastIndex = addedData % ITEMS_PER_AD;
        for (int i = lastIndex; i < alRecyclerlist.size(); i += ITEMS_PER_AD) {
            final AdView adView = new AdView(mContext);
            adView.setAdSize(AdSize.LARGE_BANNER);
            adView.setAdUnitId(getString(R.string.test_id));
            if (!(alRecyclerlist.get(i) instanceof AdView)) {
                alRecyclerlist.add(i, adView);
            }
            AdRequest adRequest = new AdRequest.Builder().build();
            adView.loadAd(adRequest);
        }
        mAdapter.notifyDataSetChanged();
    }
 ```

list를 한번더 가져올때 추가된 데이터 사이즈를 넣어주면 된다.



