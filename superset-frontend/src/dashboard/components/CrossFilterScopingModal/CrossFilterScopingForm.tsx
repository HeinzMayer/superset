/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { FC } from 'react';
import { FormInstance } from 'antd/lib/form';
import FilterScope from '../nativeFilters/FiltersConfigModal/FiltersConfigForm/FilterScope/FilterScope';
import { setCrossFilterFieldValues } from './utils';
import { Scope } from '../nativeFilters/types';
import { useForceUpdate } from '../nativeFilters/FiltersConfigModal/FiltersConfigForm/utils';
import { CrossFilterScopingFormType } from './types';

type CrossFilterScopingFormProps = {
  scope: Scope;
  form: FormInstance<CrossFilterScopingFormType>;
};

const CrossFilterScopingForm: FC<CrossFilterScopingFormProps> = ({
  form,
  scope,
}) => {
  const forceUpdate = useForceUpdate();
  const formScope = form.getFieldValue('scope');
  const formScoping = form.getFieldValue('scoping');
  return (
    <FilterScope
      updateFormValues={(values: any) => {
        setCrossFilterFieldValues(form, {
          ...values,
        });
      }}
      scope={scope}
      formScope={formScope}
      forceUpdate={forceUpdate}
      formScoping={formScoping}
    />
  );
};

export default CrossFilterScopingForm;
