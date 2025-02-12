This Autonomous micro-mobility simulation has been developed by the MIT Media Lab - [CityScience](https://www.media.mit.edu/groups/city-science/overview/)  group.

## Documentation website available [here!](https://micro-mobility-abm.netlify.app/)

# Requirements
    simpy
    
    pandas
    
    numpy
    
    matplotlib
    
    networkx
    
    scipy==1.6.0
    
    geopandas
    
    scikit-learn
    
    pyproj
    
    tqdm
    
    tensorflow==1.15
    
    git+git://github.com/imartinezl/pandana.git@master


# Conda environment configuration used
In case you run into library compatibility problems, you can re-use or conda environment configuration by saving the code below in a .txt file and running conda create --name <env> --file <this file>

```
# This file may be used to create an environment using:
# $ conda create --name <env> --file <this file>
# platform: osx-64
@EXPLICIT
https://repo.anaconda.com/pkgs/main/osx-64/blas-1.0-mkl.conda
https://repo.anaconda.com/pkgs/main/osx-64/bzip2-1.0.8-h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/ca-certificates-2020.12.8-hecd8cb5_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/gettext-0.19.8.1-hb0f4f8b_2.conda
https://repo.anaconda.com/pkgs/main/noarch/importlib_metadata-1.7.0-0.conda
https://repo.anaconda.com/pkgs/main/osx-64/intel-openmp-2019.4-233.conda
https://repo.anaconda.com/pkgs/main/osx-64/jbig-2.1-h4d881f8_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/jpeg-9b-he5867d9_2.conda
https://conda.anaconda.org/conda-forge/osx-64/libcxx-11.0.0-h4c3b8ed_1.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/libiconv-1.16-h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/libsodium-1.0.18-h1de35cc_0.conda
https://conda.anaconda.org/conda-forge/osx-64/llvm-openmp-11.0.0-h73239a0_1.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/lzo-2.10-h1de35cc_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/matplotlib-3.2.2-0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pandoc-2.10-0.conda
https://repo.anaconda.com/pkgs/main/osx-64/ripgrep-11.0.2-he32d670_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/xz-5.2.5-h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/yaml-0.2.5-haf1e3a3_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/zlib-1.2.11-h1de35cc_3.conda
https://repo.anaconda.com/pkgs/main/osx-64/expat-2.2.9-hb1e8313_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/gmp-6.1.2-hb37e062_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/icu-58.2-h0a44026_3.conda
https://repo.anaconda.com/pkgs/main/osx-64/libffi-3.3-hb1e8313_2.conda
https://conda.anaconda.org/conda-forge/osx-64/libgfortran5-9.3.0-h7cc5361_13.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/liblief-0.10.1-h0a44026_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/libllvm9-9.0.1-h21ff451_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/libpng-1.6.37-ha441bb4_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/libspatialindex-1.9.3-h0a44026_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/lz4-c-1.9.2-h0a44026_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/mkl-2019.4-233.conda
https://repo.anaconda.com/pkgs/main/osx-64/ncurses-6.2-h0a44026_1.conda
https://conda.anaconda.org/conda-forge/osx-64/openssl-1.1.1i-h35c211d_0.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/pcre-8.44-hb1e8313_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/snappy-1.1.8-hb1e8313_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/tbb-2020.0-h04f5b5a_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/tk-8.6.10-hb0a8c7a_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/zeromq-4.3.2-hb1e8313_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/freetype-2.10.2-ha233b18_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/glib-2.65.0-hc5f4afa_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/libedit-3.1.20191231-h1de35cc_1.conda
https://conda.anaconda.org/conda-forge/osx-64/libgfortran-5.0.0-h7cc5361_13.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/libssh2-1.9.0-ha12b0ac_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/libxml2-2.9.10-h3b9e6c8_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/mpfr-4.0.2-h9066e36_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/readline-8.0-h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/zstd-1.4.5-h41d2c2f_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/blosc-1.19.0-hab81aa3_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/dbus-1.13.16-h18a8e69_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/krb5-1.18.2-h75d18d8_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/libarchive-3.4.2-haa3ed63_0.conda
https://conda.anaconda.org/conda-forge/osx-64/libblas-3.9.0-1_h508aa58_netlib.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/libtiff-4.1.0-hcb84e12_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/libxslt-1.1.34-h83b36ba_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/mpc-1.1.0-h6ef4df4_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/sqlite-3.32.3-hffcf06c_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/unixodbc-2.3.7-h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/lcms2-2.11-h92f6f08_0.conda
https://conda.anaconda.org/conda-forge/osx-64/libcblas-3.9.0-3_h16b37ef_netlib.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/libcurl-7.71.1-h8a08a2b_1.conda
https://conda.anaconda.org/conda-forge/osx-64/liblapack-3.9.0-3_h16b37ef_netlib.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/python-3.6.10-hf48f09d_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/qt-5.9.7-h468cd18_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/alabaster-0.7.12-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/applaunchservices-0.2.1-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/appnope-0.1.0-py36hf537a9a_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/appscript-1.1.1-py36haf1e3a3_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/argh-0.26.2-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/asn1crypto-1.3.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/atomicwrites-1.4.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/attrs-19.3.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/backcall-0.2.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/backports-1.0-py_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/bitarray-1.4.0-py36haf1e3a3_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/boto-2.49.0-py36_0.conda
https://conda.anaconda.org/conda-forge/noarch/cached-property-1.5.1-py_0.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/certifi-2020.12.5-py36hecd8cb5_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/chardet-3.0.4-py36_1003.conda
https://repo.anaconda.com/pkgs/main/noarch/click-7.1.2-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/cloudpickle-1.5.0-py_0.conda
https://conda.anaconda.org/conda-forge/osx-64/coincbc-2.10.5-he509fd4_1.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/colorama-0.4.3-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/contextlib2-0.6.0.post1-py_0.conda
https://conda.anaconda.org/ibmdecisionoptimization/osx-64/cplex-12.10-py36_0.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/curl-7.71.1-hb0a8c7a_1.conda
https://repo.anaconda.com/pkgs/main/noarch/decorator-4.4.2-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/defusedxml-0.6.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/diff-match-patch-20200713-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/docutils-0.16-py36_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/entrypoints-0.3-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/et_xmlfile-1.0.1-py_1001.conda
https://repo.anaconda.com/pkgs/main/osx-64/fastcache-1.1.0-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/noarch/filelock-3.0.12-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/fsspec-0.7.4-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/future-0.18.2-py36_1.conda
https://repo.anaconda.com/pkgs/main/noarch/glob2-0.7-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/gmpy2-2.0.8-py36h6ef4df4_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/greenlet-0.4.16-py36haf1e3a3_0.conda
https://conda.anaconda.org/conda-forge/osx-64/hdf5-1.10.6-nompi_h0f9794f_1112.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/heapdict-1.0.1-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/idna-2.10-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/imagesize-1.2.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/immutables-0.14-py36haf1e3a3_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/ipython_genutils-0.2.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/itsdangerous-1.1.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/jdcal-1.4.1-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/json5-0.9.5-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/kiwisolver-1.2.0-py36h04f5b5a_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/lazy-object-proxy-1.4.3-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/llvmlite-0.33.0-py36ha11be7d_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/locket-0.2.0-py36hca03003_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/lxml-4.5.2-py36h63b7cb6_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/markupsafe-1.1.1-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/mccabe-0.6.1-py36_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/mistune-0.8.4-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/noarch/mock-4.0.2-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/more-itertools-8.4.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/mpmath-1.1.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/msgpack-python-1.0.0-py36h04f5b5a_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/olefile-0.46-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pandocfilters-1.4.2-py36_1.conda
https://repo.anaconda.com/pkgs/main/noarch/parso-0.7.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/path-13.1.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/pathtools-0.1.2-py_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/pep8-1.7.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pickleshare-0.7.5-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pkginfo-1.5.0.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pluggy-0.13.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/ply-3.11-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/prometheus_client-0.8.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/psutil-5.7.0-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/ptyprocess-0.6.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/py-1.9.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/py-lief-0.10.1-py36haf313ee_0.conda
https://repo.anaconda.com/pkgs/main/noarch/pycodestyle-2.6.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pycosat-0.6.3-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/noarch/pycparser-2.20-py_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/pycrypto-2.6.1-py36haf1e3a3_10.conda
https://repo.anaconda.com/pkgs/main/osx-64/pycurl-7.43.0.5-py36ha12b0ac_0.conda
https://repo.anaconda.com/pkgs/main/noarch/pyflakes-2.2.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pyodbc-4.0.30-py36h0a44026_0.conda
https://repo.anaconda.com/pkgs/main/noarch/pyparsing-2.4.7-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pysocks-1.7.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/python-libarchive-c-2.9-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/python.app-2-py36_10.conda
https://conda.anaconda.org/conda-forge/osx-64/python_abi-3.6-1_cp36m.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/pytz-2020.1-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pyyaml-5.3.1-py36haf1e3a3_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/pyzmq-19.0.1-py36hb1e8313_1.conda
https://repo.anaconda.com/pkgs/main/noarch/qdarkstyle-2.8.1-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/qtpy-1.9.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/regex-2020.6.8-py36haf1e3a3_0.conda
https://repo.anaconda.com/pkgs/main/noarch/rope-0.17.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/rtree-0.9.4-py36_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/ruamel_yaml-0.15.87-py36haf1e3a3_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/send2trash-1.5.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/simplegeneric-0.8.1-py36_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/sip-4.19.8-py36h0a44026_0.conda
https://repo.anaconda.com/pkgs/main/noarch/six-1.15.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/snowballstemmer-2.0.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/sortedcontainers-2.2.2-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/soupsieve-2.0.1-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/sphinxcontrib-1.0-py36_1.conda
https://repo.anaconda.com/pkgs/main/noarch/sphinxcontrib-applehelp-1.0.2-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/sphinxcontrib-devhelp-1.0.2-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/sphinxcontrib-htmlhelp-1.0.3-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/sphinxcontrib-jsmath-1.0.1-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/sphinxcontrib-qthelp-1.0.3-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/sphinxcontrib-serializinghtml-1.1.4-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/sqlalchemy-1.3.18-py36haf1e3a3_0.conda
https://repo.anaconda.com/pkgs/main/noarch/tblib-1.6.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/testpath-0.4.4-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/threadpoolctl-2.1.0-pyh5ca1d4c_0.conda
https://repo.anaconda.com/pkgs/main/noarch/toml-0.10.1-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/toolz-0.10.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/tornado-6.0.4-py36h1de35cc_1.conda
https://repo.anaconda.com/pkgs/main/noarch/tqdm-4.47.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/typed-ast-1.4.1-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/noarch/typing_extensions-3.7.4.2-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/ujson-1.35-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/unicodecsv-0.14.1-py36he531d66_0.conda
https://repo.anaconda.com/pkgs/main/noarch/wcwidth-0.2.5-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/webencodings-0.5.1-py36_1.conda
https://repo.anaconda.com/pkgs/main/noarch/werkzeug-1.0.1-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/wrapt-1.11.2-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/wurlitzer-2.0.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/xlrd-1.2.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/xlsxwriter-1.2.9-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/xlwt-1.2.0-py36h5ad1178_0.conda
https://repo.anaconda.com/pkgs/main/noarch/yapf-0.30.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/zipp-3.1.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/zope-1.0-py36_1.conda
https://conda.anaconda.org/conda-forge/noarch/amply-0.1.4-py_0.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/autopep8-1.5.3-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/babel-2.8.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/backports.shutil_get_terminal_size-1.0.0-py36_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/beautifulsoup4-4.9.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/cffi-1.14.0-py36hc512035_1.conda
https://repo.anaconda.com/pkgs/main/noarch/contextvars-2.4-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/cycler-0.10.0-py36hfc81398_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/cytoolz-0.10.1-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/noarch/dask-core-2.20.0-py_0.conda
https://conda.anaconda.org/ibmdecisionoptimization/osx-64/docplex-2.19.202-py36_0.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/html5lib-1.1-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/intervaltree-3.0.2-py_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/jedi-0.17.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/keyring-21.2.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/mkl-service-2.3.0-py36hfbe908c_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/multipledispatch-0.6.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/openpyxl-3.0.4-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/packaging-20.4-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/partd-1.1.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/path.py-12.4.0-0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pathlib2-2.3.5-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pexpect-4.8.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pillow-7.2.0-py36ha54b6ba_0.conda
https://repo.anaconda.com/pkgs/main/noarch/pydocstyle-5.0.2-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pyqt-5.9.2-py36h655552a_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/pyrsistent-0.16.0-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/noarch/python-dateutil-2.8.1-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/python-jsonrpc-server-0.3.4-py_1.conda
https://repo.anaconda.com/pkgs/main/noarch/qtawesome-0.7.2-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/setuptools-49.2.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/singledispatch-3.4.0.3-py36hf20db9d_0.conda
https://repo.anaconda.com/pkgs/main/noarch/sortedcollections-1.2.1-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/sphinxcontrib-websupport-1.2.3-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/sympy-1.6.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/terminado-0.8.3-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/traitlets-4.3.3-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/watchdog-0.10.3-py36haf1e3a3_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/xlwings-0.19.5-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/zict-2.0.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/zope.interface-4.7.1-py36h1de35cc_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/astroid-2.4.2-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/bleach-3.1.5-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/brotlipy-0.7.0-py36haf1e3a3_1000.conda
https://repo.anaconda.com/pkgs/main/osx-64/clyent-1.2.2-py36_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/cryptography-2.9.2-py36ha12b0ac_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/cython-0.29.21-py36hb1e8313_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/distributed-2.20.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/flake8-3.8.3-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/get_terminal_size-1.0.0-h7520d66_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/isort-4.3.21-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/jinja2-2.11.2-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/joblib-0.16.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/jsonschema-3.2.0-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/jupyter_core-4.6.3-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/nose-1.3.7-py36_2.conda
https://repo.anaconda.com/pkgs/main/osx-64/numpy-base-1.19.2-py36hcfb5961_0.conda
https://conda.anaconda.org/conda-forge/osx-64/pulp-2.3.1-py36h9f0ad1d_0.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/pygments-2.6.1-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pytest-5.4.3-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/wheel-0.34.2-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/zope.event-4.4-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/flask-1.1.2-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/gevent-20.6.2-py36haf1e3a3_0.conda
https://repo.anaconda.com/pkgs/main/noarch/jupyter_client-6.1.6-py_0.conda
https://repo.anaconda.com/pkgs/r/osx-64/mkl_fft-1.0.14-py36h27c97d8_0.tar.bz2
https://repo.anaconda.com/pkgs/r/osx-64/mkl_random-1.0.4-py36h27c97d8_0.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/nbformat-5.0.7-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/nltk-3.5-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pip-20.1.1-py36_1.conda
https://repo.anaconda.com/pkgs/main/noarch/prompt-toolkit-3.0.5-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pylint-2.5.3-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/pyopenssl-19.1.0-py_1.conda
https://repo.anaconda.com/pkgs/main/noarch/sphinx-3.1.2-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/anaconda-client-1.7.2-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/ipython-7.16.1-py36h5ca1d4c_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/nbconvert-5.6.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/numpy-1.19.2-py36h456fd55_0.conda
https://repo.anaconda.com/pkgs/main/noarch/numpydoc-1.1.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/prompt_toolkit-3.0.5-0.conda
https://repo.anaconda.com/pkgs/main/osx-64/python-language-server-0.34.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/urllib3-1.25.9-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/anaconda-project-0.8.4-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/astropy-4.0.1.post1-py36h01d97ff_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/bkcharts-0.2-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/bokeh-2.1.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/bottleneck-1.3.2-py36hf1fa96c_1.conda
https://conda.anaconda.org/conda-forge/osx-64/h5py-3.1.0-nompi_py36ha337fa9_100.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/imageio-2.9.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/ipykernel-5.3.2-py36h5ca1d4c_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/numba-0.50.1-py36h959d312_1.conda
https://repo.anaconda.com/pkgs/main/osx-64/numexpr-2.7.1-py36hce01a72_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/pywavelets-1.1.1-py36h1de35cc_0.conda
https://conda.anaconda.org/conda-forge/osx-64/scipy-1.5.3-py36h04de62b_0.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/dask-2.20.0-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/jupyter_console-6.1.0-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/notebook-6.0.3-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/patsy-0.5.1-py36_0.conda
https://conda.anaconda.org/conda-forge/osx-64/pytables-3.6.1-py36hce38db3_2.tar.bz2
https://repo.anaconda.com/pkgs/main/noarch/qtconsole-4.7.5-py_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/scikit-image-0.16.2-py36h6c726b0_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/scikit-learn-0.23.1-py36h603561c_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/spyder-kernels-1.9.2-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/jupyterlab_server-1.2.0-py_0.conda
https://conda.anaconda.org/conda-forge/osx-64/pandana-0.6-py36hb855a20_0.tar.bz2
https://repo.anaconda.com/pkgs/main/osx-64/spyder-4.1.4-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/statsmodels-0.11.1-py36haf1e3a3_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/widgetsnbextension-3.5.1-py36_0.conda
https://repo.anaconda.com/pkgs/main/noarch/ipywidgets-7.5.1-py_0.conda
https://repo.anaconda.com/pkgs/main/noarch/jupyterlab-2.1.5-py_0.cond
https://repo.anaconda.com/pkgs/main/osx-64/jupyter-1.0.0-py36_7.conda
https://repo.anaconda.com/pkgs/main/osx-64/_anaconda_depends-2020.07-py36_0.conda
https://repo.anaconda.com/pkgs/main/osx-64/anaconda-custom-py36_1.conda
```
